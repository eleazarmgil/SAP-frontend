import { Component } from '@angular/core';
import { ContentService } from '../../../../core/services/content/content.service';
import { Router } from '@angular/router';
import { CreateDisorderRequest } from '../../../../core/models/create-disorder.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent {
  disorder: CreateDisorderRequest = {
    nombre: '',
    descripcion: '',
    causas: '',
    sintomas: '',
    fechaPublicacion: new Date().toISOString() // Default to current date
  };

  constructor(
    private contentService: ContentService,
    private router: Router
  ) {}

  createContent(): void {
    this.contentService.createContent(this.disorder).subscribe({
      next: () => {
        console.log('Trastorno creado con éxito.');
        this.router.navigate(['/app/content']); // Redirect to the content list
      },
      error: (error: any) => {
        console.error('Error al crear el trastorno:', error);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/app/content']); // Redirect to the content list
  }
}
