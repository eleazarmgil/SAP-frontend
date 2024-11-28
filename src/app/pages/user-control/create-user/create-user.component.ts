import { Component, OnInit } from '@angular/core';
import { UserControlService } from '../../../../core/services/user-control/user-control.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StateService } from '../../../../core/services/state/state.service';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { RegisterRequest } from '../../../../core/models/register-request.model';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  user: RegisterRequest = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    role:'',
    ciudadId: 0
  };
  states: any[] = [];
  ciudades: any[] = [];
  stateId: number | null = null; // Almacena el ID del estado seleccionado
  isPsychologist: boolean = false;

  constructor(
    private userControlService: UserControlService,
    private router: Router,
    private authService: AuthService,
    private stateService: StateService // Inyecta el servicio de estados
  ) {}

  ngOnInit(): void {
    this.loadStates(); // Cargar los estados al iniciar el componente
  }

  loadStates(): void {
    this.stateService.getAllStates().subscribe({
      next: (data:any) => {
        this.states = data;
      },
      error: (error:any) => {
        console.error('Error al cargar los estados:', error);
      }
    });
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
      next: (data:any) => {
        console.log("Ciudades actualizadas");
        this.ciudades = data; // Asigna los datos de ciudades a la variable
      },
      error: (error:any) => {
        console.error('Error al actualizar el usuario:', error);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/app/users']); // Redirigir a la lista de usuarios
  }

  createUser(): void {
    // Asigna el ID de la ciudad seleccionada
    this.user.ciudadId = this.stateId || 0;
    console.log(this.user);
    this.authService.register(this.user).subscribe({
      next: () => {
        console.log('Usuario creado con éxito.');
        this.router.navigate(['/app/users']); // Redirigir a la lista de usuarios
      },
      error: (error: any) => {
        console.error('Error al crear el usuario:', error);
      }
    });
  }
}
