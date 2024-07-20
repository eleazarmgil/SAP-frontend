import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lastIndexOf } from 'cypress/types/lodash';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})


export class SignUpComponent {
  isPsychologist: boolean = false;
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required, this.confirmPasswordValidator.bind(this)]],
    });
  }

  confirmPasswordValidator(control: FormGroup): { [s: string]: boolean } | null {
    if (!control || !control.parent) {
      return null;
    }
    const password = control.parent?.get('password')?.value;
    const confirmPassword = control.value;

    if (confirmPassword !== password) {
      return { passwordsNotMatch: true };
    }

    return null;
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log("Form valido "+this.isPsychologist);
    }else{
      console.error("Form not valid")
    }
  }
}
