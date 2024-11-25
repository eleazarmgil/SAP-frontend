import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileService } from '../../../../core/services/profile/profile.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StorageService } from '../../../../core/services/storage/storage.service';

@Component({
  selector: 'app-update-email',
  templateUrl: './update-email.component.html',
  styleUrl: './update-email.component.scss',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class UpdateEmailComponent implements OnInit {
  emailForm: FormGroup;

  constructor(private storageService: StorageService, private profileService: ProfileService, private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.emailForm.valid) {
      const email = this.emailForm.get('email')?.value;
      this.profileService.updateEmail(email)?.subscribe({
        next: (response) => {
          // Actualizar el correo electrónico en localStorage
          const userString = this.storageService.getItem('user');
          if (userString) {
            const user = JSON.parse(userString);
            user.email = email;
            this.storageService.setItem('user', JSON.stringify(user)); // Guardar el usuario actualizado en localStorage
          }
          alert(`Correo electrónico actualizado: ${email}`);
        },
        error: (error) => {
          console.error('Error al actualizar el correo electrónico:', error);
          alert('Hubo un error al intentar actualizar el correo electrónico. Inténtalo más tarde.');
        }
      });
    } else {
      alert('Por favor, ingrese un correo electrónico válido.');
    }
  }
}
