import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private router: Router) {}

  navigateToProfile() {
    this.router.navigate(['/signup']);
  }

  navigateToUser(userId: string) {
    this.router.navigate(['admin', 'users', userId]);
  }
}
