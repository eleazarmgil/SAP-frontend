import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserControlService } from '../../../../core/services/user-control/user-control.service';
import { User } from '../../../../core/models/user.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../../../../core/services/storage/storage.service';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'] // Corrige styleUrl a styleUrls
})
export class ListUserComponent {
  users: User[] = [];
  filteredUsers: User[] = []; // Usuarios filtrados
  searchTerm: string = ''; // Término de búsqueda
  actualUser: User | null = null;

  constructor(
    private router: Router,
    private storageService: StorageService,
    private userService: UserControlService
  ) {}

  ngOnInit(): void {
    this.loadCurrentUser();
    this.getAllUsers(); // Cargar usuarios al inicializar
  }

  createUser() {
    this.router.navigate(['/app/users/new']);
  }

  private loadCurrentUser(): void {
    const userString = this.storageService.getItem("user") || "";
    this.actualUser = JSON.parse(userString);
  }

  private getAllUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data: User[]) => {
        this.users = data; // Asigna la respuesta a la propiedad users
        this.filteredUsers = data; // Inicializa los usuarios filtrados con todos los usuarios
        this.filterUsers(); // Filtrar usuarios después de cargar
      },
      error: (error: any) => {
        console.error('Error fetching users:', error); // Manejo de error
      }
    });
  }

  viewUser(id: string) {
    this.router.navigate(['/app/users/' + id]);
  }

  filterUsers(): void {
    const term = this.normalizeString(this.searchTerm);

    if (this.actualUser?.role === 'admin') {
      this.filteredUsers = this.getFilteredUsersForAdmin(term);
    } else {
      this.filteredUsers = this.getFilteredPsychologists(term);
    }
  }

  private getFilteredUsersForAdmin(term: string): User[] {
    return this.users.filter(user =>
      this.matchesSearchTerm(user, term)
    );
  }

  private getFilteredPsychologists(term: string): User[] {
    return this.users.filter(user =>
      user.role === 'psicologo' && user.verificado === 'V' &&
      this.matchesSearchTerm(user, term)
    );
  }

  private matchesSearchTerm(user: User, term: string): boolean {
    return (
      this.normalizeString(user.nombre).includes(term) ||
      this.normalizeString(user.apellido).includes(term)
    );
  }

  private normalizeString(str: string): string {
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
}
