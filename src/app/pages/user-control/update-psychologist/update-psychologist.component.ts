import { Component } from '@angular/core';
import { UpdatePsychologistRequest } from '../../../../core/models/update-psychologist-request.model';
import { UserControlService } from '../../../../core/services/user-control/user-control.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { StateService } from '../../../../core/services/state/state.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-psychologist',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './update-psychologist.component.html',
  styleUrl: './update-psychologist.component.scss'
})
export class UpdatePsychologistComponent {
  psychologist: UpdatePsychologistRequest = {
    id: null,                            // Will be set during loading
    email: null,
    nombre: null,
    apellido: null,
    numeroColegiatura: null,
    telefonOficina: null,
    descripcionPsicologo: null,
    calle_Av: null,
    verificado: "F",                   // Default value
    experiencia: null,
    formacion: null,
    tipoTerapia: null,
    ciudadId: null                      // Will be set during loading
  };
  states: any[] = [];
  ciudades: any[] = [];
  stateId: number = 1;

  constructor(
    private userControlService: UserControlService,
    private router: Router,
    private stateService: StateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadStates();
    this.loadPsychologistData(); // Load psychologist data on init
  }

  loadStates(): void {
    this.stateService.getAllStates().subscribe({
      next: (data: any) => {
        this.states = data;
      },
      error: (error: any) => {
        console.error('Error al cargar los estados:', error);
      }
    });
  }

  loadPsychologistData(): void {
    const psychologistId = this.route.snapshot.paramMap.get('id'); // Get psychologist ID from route
    if (psychologistId) {
      this.userControlService.getUserByID(psychologistId).subscribe({
        next: (data: UpdatePsychologistRequest) => {
          this.psychologist = data;
          this.stateId = data.ciudadId || 1; // Set stateId based on psychologist data
          this.loadCitiesByState(this.stateId); // Load cities for the selected state
        },
        error: (error: any) => {
          console.error('Error al cargar los datos del psicólogo:', error);
        }
      });
    }
  }

  onStateChange(): void {
    if (this.stateId) {
      this.loadCitiesByState(this.stateId);
    } else {
      this.ciudades = [];
    }
  }

  loadCitiesByState(stateId: number): void {
    this.stateService.getAllCities(stateId).subscribe({
      next: (data: any) => {
        this.ciudades = data;
      },
      error: (error: any) => {
        console.error('Error al cargar las ciudades:', error);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/app/users']);
  }

  updatePsychologist(): void {
    this.psychologist.ciudadId = this.stateId; // Ensure ciudadId is set
    this.userControlService.updatePsychologist(this.psychologist).subscribe({
      next: () => {
        alert('Psicólogo actualizado con éxito.');
        this.router.navigate(['/app/users']);
      },
      error: (error: any) => {
        console.error('Error al actualizar el psicólogo:', error);
      }
    });
  }
}
