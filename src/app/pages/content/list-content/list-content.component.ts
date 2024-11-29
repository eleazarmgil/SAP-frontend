import { Component } from '@angular/core';
import { Disorder } from '../../../../core/models/disorder.model';
import { Router, RouterModule } from '@angular/router';
import { ContentService } from '../../../../core/services/content/content.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-content',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './list-content.component.html',
  styleUrl: './list-content.component.scss'
})
export class ListContentComponent {
  disorders: Disorder[] = [];
  filteredDisorders: Disorder[] = []; // Filtered disorders
  searchTerm: string = ''; // Search term

  constructor(
    private router: Router,
    private contentService: ContentService) {}

  ngOnInit(): void {
    this.getAllDisorders();
  }

  createDisorder() {
    this.router.navigate(['/app/content/new']);
  }

  getAllDisorders(): void {
    this.contentService.getAllContent().subscribe({
      next: (data: Disorder[]) => {
        this.disorders = data; // Assign response to disorders
        this.filteredDisorders = data; // Initialize filtered disorders with all disorders
      },
      error: (error: any) => {
        console.error('Error fetching disorders:', error);
      }
    });
  }

  viewDisorder(id: string) {
    this.router.navigate(['/app/content/' + id]);
  }

  filterDisorders(): void {
    const term = this.searchTerm.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Normalize and remove accents
    if (!term) {
      this.filteredDisorders = this.disorders; // If no search term, show all disorders
    } else {
      this.filteredDisorders = this.disorders.filter(disorder =>
        disorder.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(term) ||
        disorder.descripcion.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(term)
      );
    }
  }
}
