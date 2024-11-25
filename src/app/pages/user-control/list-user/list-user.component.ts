import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserControlService } from '../../../../core/services/user-control/user-control.service';
import { User } from '../../../../core/models/user.model';


@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent {
  users: User[] = [];

  constructor(private userService:UserControlService){}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data: User[]) => {
        this.users = data; // Asigna la respuesta a la propiedad users
        console.log('Usuarios obtenidos:', this.users);
      },
      error: (error: any) => { // Especifica el tipo como 'any'
        console.error('Error al obtener usuarios:', error);
      }
    });
  }

  deleteUser(userId: String): void {
    this.users = this.users.filter(user => user.id !== userId);
    console.log('Usuario eliminado con ID:', userId);
  }
}
