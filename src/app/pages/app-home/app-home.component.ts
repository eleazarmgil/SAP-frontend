import { Component } from '@angular/core';
import { BasicUser } from '../../../core/models/login-response.model';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import { StorageService } from '../../../core/services/storage/storage.service';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../../core/models/menu-item.model';

@Component({
  selector: 'app-app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app-home.component.html',
  styleUrl: './app-home.component.scss'
})
export class AppHomeComponent {
  menuItems: MenuItem[] = [
    { label: 'Perfil', link: '/app/profile', icon: 'settings' },
    { label: 'Control de Usuarios', link: '/app/users', icon: 'user' },
    { label: 'Control de Contenido', link: '/app/content', icon: 'settings' }
  ];
  public isSidebarRetracted = false;
  showUsername = true;
  user: BasicUser| null = JSON.parse(this.storageService.getItem('user') || 'null');

  // Combina nombre y apellido
  name: string = this.user ? `${this.user.nombre} ${this.user.apellido}` : 'Invitado';

  constructor(private route: Router, private authService:AuthService, private storageService:StorageService) {}

  ngOnInit(): void {
    if(this.storageService.getItem('role')==='admin'){
      this.menuItems= [
        { label: 'Mi Perfil', link: '/app/profile', icon: 'settings' },
        { label: 'Control de Usuarios', link: '/app/users', icon: 'user' },
        { label: 'Control de Trastornos', link: '/app/content', icon: 'settings' }
      ];
    }else{
      this.menuItems= [
        { label: 'Mi Perfil', link: '/app/profile', icon: 'settings' },
        { label: 'Psicólogos', link: '/app/users', icon: 'user' },
        { label: 'Trastornos', link: '/app/content', icon: 'settings' }
      ];
    }
  }

  toggleSidebar(): void {
    this.isSidebarRetracted = !this.isSidebarRetracted;
  }

  logout(){
    this.authService.logout();
  }
}
