import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router, private storageService:StorageService) { }

  redirectUpdateEmail(): void {
    let role: string | null = null;
    role = this.storageService.getItem('role'); // Obtener el rol solo en el navegador
    if (role === 'admin') {
      this.router.navigate(['/admin/profile/update-email']); // Ruta para administradores
    } else if (role === 'psicologo') {
      this.router.navigate(['/app-ps/profile/update-email']); // Ruta para psicólogos
    } else {
      this.router.navigate(['/app-us/profile/update-email']); // Ruta para usuarios normales
    }
  }
  redirectResetPassword(): void {
    let role: string | null = null;
    role = this.storageService.getItem('role'); // Obtener el rol solo en el navegador
    if (role === 'admin') {
      this.router.navigate(['/admin/profile/reset-password']); // Ruta para administradores
    } else if (role === 'psicologo') {
      this.router.navigate(['/app-ps/profile/update-email']); // Ruta para psicólogos
    } else {
      this.router.navigate(['/app-us/profile/update-email']); // Ruta para usuarios normales
    }
  }
  redirectAfterAuth() {
    this.router.navigate(['/app/profile']);
  }
}
