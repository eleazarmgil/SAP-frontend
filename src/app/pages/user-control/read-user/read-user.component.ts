import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserControlService } from '../../../../core/services/user-control/user-control.service'; // Ajusta la ruta según tu estructura
import { User } from '../../../../core/models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-read-user',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './read-user.component.html',
  styleUrl: './read-user.component.scss'
})
export class ReadUserComponent implements OnInit {
  user: User | null = null; // Almacena la información del usuario
  role: string | null = null;
  isPsychologist: boolean = false;
  constructor(
    private route: ActivatedRoute,
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
          switch(this.user.role){
            case 'psicologo':
              this.role='Psicólogo';
              break;
            case 'usuario':
              this.role='Usuario';
              break;
            case 'admin':
              this.role='Administrador';
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
}
