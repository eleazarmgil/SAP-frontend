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

  ngOnInit(): void {
    // Verifica si el usuario ya está autenticado
    const token = localStorage.getItem('token');
    if (token) {
      switch(localStorage.getItem('role')){
        case 'admin':{
          this.router.navigate(['/admin/profile']);
          break;
        }
        case 'psicologo':{
          this.router.navigate(['psychologist']);
          break;
        }
        case 'usuario':{
          this.router.navigate(['usuario']);
          break;
        }
      }

    }
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
            localStorage.setItem('role', response.result.role)

            console.log('Login successful:', response);
            this.redirectUser(response.result.role);
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

  private redirectUser(role: string) {
    if (role === 'admin') {
      this.router.navigate(['/admin/profile']); // Ruta para administradores
    } else if (role === 'psychologist') {
      this.router.navigate(['/psychologist/profile']); // Ruta para psicólogos
    } else {
      this.router.navigate(['/user/profile']); // Ruta para usuarios normales
    }
  }
}