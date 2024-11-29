import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StorageService } from '../../../core/services/storage/storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  role:string='';
  constructor(private storageService:StorageService){
  }

  ngOnInit(){
    this.role=this.storageService.getItem('role')||"";
  }
}
