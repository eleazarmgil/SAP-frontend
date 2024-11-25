import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../../core/models/login-response.model';
import { AuthService } from '../../../core/services/auth/auth.service';

interface MenuItem {
  label: string;
  link: string;
  icon: string;
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  public isSidebarRetracted = false;
  showUsername = true;
  user: User | null = JSON.parse(localStorage.getItem('user') || 'null');

  // Combina nombre y apellido
  name: string = this.user ? `${this.user.nombre} ${this.user.apellido}` : 'Invitado';

  menuItems: MenuItem[] = [
    { label: 'Perfil', link: '/admin/profile', icon: 'settings' },
    { label: 'Control de Usuarios', link: '/admin/users', icon: 'user' },
    { label: 'Control de Contenido', link: '/admin/content', icon: 'settings' }
  ];

  constructor(private route: Router, private authService:AuthService) {}

  ngOnInit(): void {}

  toggleSidebar(): void {
    this.isSidebarRetracted = !this.isSidebarRetracted;
  }

  logout(){
    this.authService.logout();
  }
}
