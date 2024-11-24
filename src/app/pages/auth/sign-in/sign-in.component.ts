import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginResponse } from '../../../../core/models/login-response.model';
import { LoginRequest } from '../../../../core/models/login-request.model';
import { ErrorResponse } from '../../../../core/models/error-response.model';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router:Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials: LoginRequest = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
      this.authService.login(credentials).subscribe(
        (response: LoginResponse) => {
          if (response.isSuccess) {
            // Store token and user info in localStorage
            localStorage.setItem('token', response.result.token);
            localStorage.setItem('user', JSON.stringify(response.result.usuario));

            console.log('Login successful:', response);
            // Redirect or perform another action here
          } else {
            // Handle errors if isSuccess is false
            console.error('Login failed:', response.errorMessages);
          }
        },
        (error: ErrorResponse) => {
          // Handle login errors, e.g., show an error message
          console.error('Login error:', error);
        }
      );
    }
  }
}
