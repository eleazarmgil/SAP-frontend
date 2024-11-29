import { Component } from '@angular/core';
import { Disorder } from '../../../../core/models/disorder.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../../../../core/services/content/content.service';

@Component({
  selector: 'app-read-content',
  standalone: true,
  imports: [],
  templateUrl: './read-content.component.html',
  styleUrl: './read-content.component.scss'
})
export class ReadContentComponent {
  content: Disorder | null = null; // Stores the disorder details

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentService: ContentService
  ) {}

  ngOnInit(): void {
    this.getContentDetails(); // Call method to get content details on init
  }

  getContentDetails(): void {
    const contentId = this.route.snapshot.paramMap.get('id'); // Get content ID from route parameters
    if (contentId) {
      this.contentService.getContentByID(contentId).subscribe({
        next: (data: Disorder) => {
          this.content = data; // Assign response to content
          console.log('Detalles del contenido:', this.content);
        },
        error: (error: any) => {
          console.error('Error al obtener detalles del contenido:', error);
        }
      });
    } else {
      console.error('No se encontró el ID del contenido en la ruta.');
    }
  }
}
