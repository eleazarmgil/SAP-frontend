import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StorageService } from '../../../core/services/storage/storage.service';
import { NavigationService } from '../../../core/services/navigation/navigation.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor(private navigationService:NavigationService){}

  redirectUpdateEmail(){
    this.navigationService.redirectUpdateEmail();
  }

  redirectResetPassword(){
    this.navigationService.redirectResetPassword();
  }
}
