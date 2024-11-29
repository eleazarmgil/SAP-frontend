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
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm: string = '';
  role:string='';

  constructor(
    private router: Router,
    private storageService: StorageService,
    private userService: UserControlService
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
    this.role=this.storageService.getItem('role')||"";
  }

  createUser() {
    this.router.navigate(['/app/users/new']);
  }

  private getAllUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data: User[]) => {
        this.users = data;
        this.filterUsers(); // Filtrar usuarios después de cargar
      },
      error: (error: any) => {
        console.error('Error fetching users:', error);
      }
    });
  }

  viewUser(id: string) {
    this.router.navigate(['/app/users/' + id]);
  }

  filterUsers(): void {
    const term = this.normalizeString(this.searchTerm);

    if (this.storageService.getItem("role") === 'admin') {
      this.filteredUsers = this.getFilteredUsersForAdmin(term);
    } else {
      this.filteredUsers = this.getFilteredPsychologists(term);
    }
  }

  private getFilteredUsersForAdmin(term: string): User[] {
    return this.users.filter(user => this.matchesSearchTerm(user, term));
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
