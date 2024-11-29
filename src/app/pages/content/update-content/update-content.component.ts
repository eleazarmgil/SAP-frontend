import { Component } from '@angular/core';
import { Disorder } from '../../../../core/models/disorder.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../../../../core/services/content/content.service';
import { UpdateCredentialsComponent } from '../../profile/update-credentials/update-credentials.component';
import { UpdateDisorderRequest } from '../../../../core/models/update-disorder-request.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-content',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-content.component.html',
  styleUrl: './update-content.component.scss'
})
export class UpdateContentComponent {
  content: Disorder ={
    id:'',
    nombre:'',
    descripcion: '',
    causas: '',
    sintomas: '',
    fechaPublicacion: ''
  } // Stores the disorder details
  data: UpdateDisorderRequest={
    id:'',
    nombre:'',
    descripcion: '',
    causas: '',
    sintomas: ''
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentService: ContentService
  ) {}

  ngOnInit(): void {
    this.getContentDetails();
  }

  getContentDetails(): void {
    const contentId = this.route.snapshot.paramMap.get('id'); // Get content ID from route parameters
    if (contentId) {
      this.contentService.getContentByID(contentId).subscribe({
        next: (data: Disorder) => {
          this.content = data; // Assign response to content
        },
        error: (error: any) => {
          console.error('Error al obtener detalles del contenido:', error);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.content) {
      this.data.causas=this.content.causas;
      this.data.descripcion=this.content.descripcion;
      this.data.id=this.content.id;
      this.data.nombre=this.content.nombre;
      this.data.sintomas=this.content.sintomas;
      this.contentService.updateContent(this.data).subscribe({
        next: () => {
          alert('Trastorno actualizado exitosamente.');
          this.router.navigate(['/app/content']); // Navigate back to the list
        },
        error: (error: any) => {
          console.error('Error al actualizar el trastorno:', error);
          alert('Ocurrió un error al intentar actualizar el trastorno.');
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/app/content']); // Navigate back to the list without saving changes
  }
}
