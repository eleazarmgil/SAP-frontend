import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserControlService } from '../../../../core/services/user-control/user-control.service';
import { User } from '../../../../core/models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-read-user',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.scss'] // Corrige 'styleUrl' a 'styleUrls'
})
export class ReadUserComponent implements OnInit {
  user: User | null = null; // Almacena la información del usuario
  role: string | null = null;
  isPsychologist: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserControlService
  ) {}

  ngOnInit(): void {
    this.getUserDetails(); // Llama al método para obtener detalles del usuario al inicializar
  }

  getUserDetails(): void {
    const userId = this.route.snapshot.paramMap.get('id'); // Obtiene el ID del parámetro de la ruta
    if (userId) {
      this.userService.getUserByID(userId).subscribe({
        next: (data: User) => {
          this.user = data; // Asigna la respuesta a la propiedad user
          this.isPsychologist = this.user.role === 'psicologo'; // Verificamos si es psicólogo
          switch (this.user.role) {
            case 'psicologo':
              this.role = 'Psicólogo';
              break;
            case 'usuario':
              this.role = 'Usuario';
              break;
            case 'admin':
              this.role = 'Administrador';
              break;
          }
          console.log('Detalles del usuario:', this.user);
        },
        error: (error: any) => {
          console.error('Error al obtener detalles del usuario:', error);
        }
      });
    } else {
      console.error('No se encontró el ID del usuario en la ruta.');
    }
  }

  verify(): void {
    const id = this.user?.id || null;
    if(this.user?.verificado=="F"){
      if (id) {
        this.userService.verifyPsychologist(id).subscribe({
          next: () => {
            if(this.user!=null && this.user.verificado!=null){
              this.user.verificado='V';
            }
            alert('Psicólogo verificado exitosamente.');
          },
          error: (error: any) => {
            console.error('Error al verificar al psicólogo:', error);
          }
        });
      } else {
        console.error('ID de usuario no disponible para verificar.');
      }
    }else{
      alert("El psicólogo ya está verificado.")
    }

  }

  unverify(): void {
    const id = this.user?.id || null;
    if(this.user?.verificado=="V"){
      if (id) {
        this.userService.verifyPsychologist(id).subscribe({
          next: () => {
            if(this.user!=null && this.user.verificado!=null){
              this.user.verificado='F';
            }
            alert('Se ha eliminado la verificación exitosamente.');
          },
          error: (error: any) => {
            console.error('Error al verificar al psicólogo:', error);
          }
        });
      } else {
        console.error('ID de usuario no disponible para verificar.');
      }
    }else{
      alert("El psicólogo no está verificado.")
    }
  }

  updateUser(): void {
    if (this.user?.id) {
      this.router.navigate(['/app/users', this.user.id, 'up-us']);
    }
  }

  updatePsychologist(): void {
    if (this.user?.id) {
      this.router.navigate(['/app/users', this.user.id, 'up-ps']);
    }
  }
}
