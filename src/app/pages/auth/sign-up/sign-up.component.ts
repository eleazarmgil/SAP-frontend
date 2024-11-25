import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterRequest } from '../../../../core/models/register-request.model';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { StorageService } from '../../../../core/services/storage/storage.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  isPsychologist: boolean = false;
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private storageService:StorageService) {
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

  ngOnInit(): void {
    // Verifica si el usuario ya está autenticado
    const token = this.storageService.getItem('token');
    if (token) {
      switch(this.storageService.getItem('role')){
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
    if (this.signUpForm.valid) {
      const credentials: RegisterRequest = {
        email: this.signUpForm.value.email,
        nombre: this.signUpForm.value.firstName,
        apellido: this.signUpForm.value.lastName,
        password: this.signUpForm.value.password,
        role: this.isPsychologist ? 'psicologo' : 'usuario',
        ciudadId: 1
      };

      this.authService.register(credentials).subscribe(
        (response) => {
          // Maneja la respuesta exitosa
          console.log('Registro exitoso:', response);
          this.router.navigate(['/auth'])

        },
        (error) => {
          // Maneja el error
          console.error('Error en el registro:', error);
        }
      );
    } else {
      console.error('Formulario no válido');
    }
  }
}
