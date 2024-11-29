import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { StorageService } from '../services/storage/storage.service'; // Adjust the path according to your structure

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private storageService: StorageService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const isAdmin = this.storageService.getItem('role') === 'admin';

    if (!isAdmin) {
      this.router.navigate(['/app/profile']);
      return false;
    }
    return true;
  }
}
