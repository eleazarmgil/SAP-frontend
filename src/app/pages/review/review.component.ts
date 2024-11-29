import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ReviewService } from '../../../core/services/review/review.service';
import { UserControlService } from '../../../core/services/user-control/user-control.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class ReviewComponent implements OnInit {
  psychologistId: string = "";
  feedbacks: any[] = []; // Array to hold feedback data
  users: { [key: string]: { nombre: string; apellido:string; email: string} } = {}; // Map to hold user details
  isLoading: boolean = true; // Loading state

  constructor(
    private reviewService: ReviewService,
    private userControlService: UserControlService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.psychologistId = this.route.snapshot.paramMap.get('id') || '';
    this.loadFeedback();
  }

  loadFeedback(): void {
    this.reviewService.getAllReviewsByPsychologist(this.psychologistId).subscribe({
      next: (response) => {
        this.feedbacks = response;
        this.fetchUserDetails(); // Fetch user details after loading feedback
      },
      error: (error) => {
        console.error('Error fetching feedback', error);
        this.isLoading = false; // Ensure loading state is reset
      }
    });
  }

  fetchUserDetails(): void {
    const userIds = this.feedbacks.map(feedback => feedback.usuarioId); // Extract user IDs
    const uniqueUserIds = Array.from(new Set(userIds)); // Get unique user IDs

    if (uniqueUserIds.length === 0) {
      this.isLoading = false; // No users to load, stop loading
      return;
    }

    uniqueUserIds.forEach(userId => {
      this.userControlService.getUserByID(userId).subscribe({
        next: (user) => {
          this.users[userId] = {
            apellido: user.apellido,
            nombre: user.nombre,
            email: user.email
          };
        },
        error: (error) => {
          console.error(`Error fetching user data for ID ${userId}`, error);
        },
        complete: () => {
          // Only set loading to false if all users have been fetched
          this.isLoading = this.checkLoadingState();
        }
      });
    });
  }

  private checkLoadingState(): boolean {
    // Check if there are any feedback items without user details
    return this.feedbacks.some(feedback => !this.users[feedback.usuarioId]);
  }
}
