import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserControlService } from '../../../core/services/user-control/user-control.service';

@Component({
  selector: 'app-user-control',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-control.component.html',
  styleUrl: './user-control.component.scss'
})
export class UserControlComponent {


}
