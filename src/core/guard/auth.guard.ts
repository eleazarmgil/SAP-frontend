import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { StorageService } from '../services/storage/storage.service'; // Adjust the path according to your structure

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private storageService: StorageService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const isAuthenticated = this.storageService.getItem('token') !== null;

    if (!isAuthenticated) {
      this.router.navigate(['/auth']); // Redirect to the auth page if not authenticated
      return false;
    }
    return true;
  }
}
