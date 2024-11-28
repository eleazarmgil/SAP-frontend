import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserControlService } from '../../../../core/services/user-control/user-control.service';
import { User } from '../../../../core/models/user.model';
import { NavigationService } from '../../../../core/services/navigation/navigation.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent {
  users: User[] = [];
  filteredUsers: User[] = []; // Usuarios filtrados
  searchTerm: string = ''; // Término de búsqueda

  constructor(private router: Router, private userService:UserControlService){}

  ngOnInit(): void {
    this.getAllUsers();
  }

  createUser(){
    this.router.navigate(['/app/users/new'])
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data: User[]) => {
        this.users = data; // Asigna la respuesta a la propiedad users
        this.filteredUsers = data; // Inicializa los usuarios filtrados con todos los usuarios
      },
      error: (error: any) => { // Especifica el tipo como 'any'
      }
    });
  }

  viewUser(id:string){
    this.router.navigate(['/app/users/'+id])
  }

  filterUsers(): void {
    const term = this.searchTerm.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Normaliza y elimina acentos
    if (!term) {
      this.filteredUsers = this.users; // Si no hay término de búsqueda, mostrar todos los usuarios
    } else {
      this.filteredUsers = this.users.filter(user =>
        user.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(term) ||
        user.apellido.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(term) ||
        user.role?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(term)
      );
    }
  }

}
