import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class AdminFooterComponent {
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }
}
