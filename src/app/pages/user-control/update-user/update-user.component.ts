import { Component } from '@angular/core';
import { UserControlService } from '../../../../core/services/user-control/user-control.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { StateService } from '../../../../core/services/state/state.service';
import { UpdateUserRequest } from '../../../../core/models/update-user-request.model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule ],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss'
})
export class UpdateUserComponent {
  user: UpdateUserRequest = {
    id: '',                            // Initialize with an empty string, will be set during loading
    email: '',
    nombre: '',
    apellido: '',
    telefonOficina: '',                // Initialize as an empty string
    ciudadId: 0                     // Initialize as null, will be set during the update
  };
  states: any[] = [];
  ciudades: any[] = [];
  stateId: number = 0;

  constructor(
    private userControlService: UserControlService,
    private router: Router,
    private authService: AuthService,
    private stateService: StateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadStates();
    this.loadUserData(); // Load user data on init
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

  loadUserData(): void {
    const userId = this.route.snapshot.paramMap.get('id'); // Get user ID from route
    if (userId) {
      this.userControlService.getUserByID(userId).subscribe({
        next: (data: UpdateUserRequest) => {
          this.user = data;
          this.stateId = data.ciudadId; // Set stateId based on user data
          this.loadCitiesByState(this.stateId); // Load cities for the selected state
        },
        error: (error: any) => {
          console.error('Error al cargar los datos del usuario:', error);
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

  updateUser(): void {
    this.user.ciudadId = this.stateId || 0; // Ensure ciudadId is set
    this.userControlService.updateUser(this.user).subscribe({
      next: () => {
        console.log('Usuario actualizado con éxito.');
        this.router.navigate(['/app/users']);
      },
      error: (error: any) => {
        console.error('Error al actualizar el usuario:', error);
      }
    });
  }
}
