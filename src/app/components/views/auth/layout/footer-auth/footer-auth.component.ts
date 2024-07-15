import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-auth',
  templateUrl: './footer-auth.component.html',
  styleUrl: './footer-auth.component.scss'
})
export class FooterAuthComponent {
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }
}
