import { Component } from '@angular/core';
import { CreateReviewComponent } from './create-review/create-review.component';
import { ReviewService } from '../../../core/services/review/review.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../../../core/services/storage/storage.service';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {

}
