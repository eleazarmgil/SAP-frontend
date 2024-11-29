import { Component } from '@angular/core';
import { CreateReviewComponent } from './create-review/create-review.component';
import { ReviewService } from '../../../core/services/review/review.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateReviewRequest } from '../../../core/models/create-review-request.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../../../core/services/storage/storage.service';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
  feedback: CreateReviewRequest= {
    observacion: '',
    puntaje: 0,
    usuarioId: '', // Set this with the logged-in user's ID
    psicologoId: '' // Set this with the corresponding psychologist's ID
  };

  userString: string = "";
  user:User|null=null;


  constructor(private route: ActivatedRoute, private storageService:StorageService, private reviewService: ReviewService, private router: Router) {}

  ngOnInit(){
    this.userString=this.storageService.getItem("user")||"";
    this.user= JSON.parse(this.userString);
  }
  submit(): void {
    this.feedback.psicologoId = this.route.snapshot.paramMap.get('id')||""; // Get user ID from route
    this.feedback.usuarioId=this.user?.id||"";
    this.reviewService.createReview(this.feedback).subscribe({
      next: response => {
        alert('Comentario enviado exitosamente.');
        this.router.navigate(['/app/content']); // Navigate back to the content list or appropriate page
      },
      error: err => {
        console.error('Error al enviar el comentario', err);
        alert('Ocurrió un error al enviar el comentario.');
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/app/content']); // Navigate back to the content list without saving
  }
}
