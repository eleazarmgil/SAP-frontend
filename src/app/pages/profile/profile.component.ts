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
  constructor(private storageService:StorageService, private navigationService:NavigationService){}

  isPsychologist:boolean=false;

  ngOnInit(){
    if(this.storageService.getItem('role')=='psicologo'){
      this.isPsychologist=true;
    }
  }

}
