import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../../core/services/state/state.service';
import { UpdatePsychologistRequest } from '../../../../core/models/update-psychologist-request.model'; // Ajusta la ruta según tu estructura
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../../../core/services/profile/profile.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-credentials',
  standalone: true,
  templateUrl: './update-credentials.component.html',
  styleUrls: ['./update-credentials.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class UpdateCredentialsComponent implements OnInit {
  states: any[] = []; // Almacena los estados
  cities: any[] = []; // Almacena las ciudades
  selectedStateId: number | null = null; // Almacena el ID del estado seleccionado
  psychologistData: UpdatePsychologistRequest = {
    id: null,
    email: null,
    nombre: null,
    apellido: null,
    numeroColegiatura: null,
    telefonOficina: "2",
    descripcionPsicologo: null,
    calle_Av: null,
    verificado: "F", // Valor por defecto
    experiencia: null,
    formacion: null,
    tipoTerapia: null,
    ciudadId: 1
  };

  constructor(
    private stateService: StateService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.loadStates();
    this.loadPsychologistData(); // Cargar los datos del psicólogo al inicio
  }

  loadStates(): void {
    this.stateService.getAllStates().subscribe({
      next: (data) => {
        this.states = data; // Asigna la respuesta a la propiedad states
      },
      error: (error) => {
        console.error('Error al cargar los estados:', error);
      }
    });
  }

  onStateChange(event: Event): void {
    const target = event.target as HTMLSelectElement; // Afirmamos que el target es un HTMLSelectElement
    this.selectedStateId = Number(target.value);
    this.loadCities(this.selectedStateId); // Carga las ciudades cuando cambia el estado
  }

  loadCities(stateId: number): void {
    this.stateService.getAllCities(stateId).subscribe({
      next: (data) => {
        this.cities = data; // Asigna la respuesta a la propiedad cities
      },
      error: (error) => {
        console.error('Error al cargar las ciudades:', error);
      }
    });
  }

  loadPsychologistData(): void {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      // Asigna los datos del usuario al objeto psychologistData
      this.psychologistData.id = user.id;
      this.psychologistData.email = user.email;
      this.psychologistData.telefonOficina = user.telefonOficina;
      this.psychologistData.ciudadId = user.ciudadId; // Asigna la ciudad actual si está disponible
    }
  }

  updatePsychologist(): void {
    this.profileService.updatePsychologist(this.psychologistData).subscribe({
      next: () => {
        console.log('Psicólogo actualizado exitosamente');
      },
      error: (error) => {
        console.error('Error al actualizar el psicólogo:', error);
      }
    });
  }
}
