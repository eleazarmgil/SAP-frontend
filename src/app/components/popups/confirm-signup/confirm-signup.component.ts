import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-confirm-signup',
  templateUrl: './confirm-signup.component.html',
  styleUrl: './confirm-signup.component.scss'
})
export class ConfirmSignupComponent{
  constructor(private dialog: MatDialog) {

  }



}
