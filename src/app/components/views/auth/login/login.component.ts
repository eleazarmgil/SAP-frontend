import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
      this.authService.login(credentials)
      .subscribe(  

        (response) => {
          if (response.isSuccess) {
            // Guarda el token y la información del usuario en localStorage
            localStorage.setItem('token', response.result.token);
            localStorage.setItem('user', JSON.stringify(response.result.usuario));

            console.log('Login successful:', response);
            // Aquí puedes redirigir a una página protegida o realizar otra acción
          } else {
            // Manejar errores si isSuccess es false
            console.error('Login failed:', response.errorMessages);
          }
        },
        (error) => {
          // Handle login errors, e.g., display error message
          console.error('Login error:', error);
        }
      );
    }
  }
}
