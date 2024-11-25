import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileService } from '../../../../core/services/profile/profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-username',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update-username.component.html',
  styleUrls: ['./update-username.component.scss']
})
export class UpdateUsernameComponent {
  nameForm: FormGroup;

  constructor(private fb: FormBuilder, private profileService: ProfileService) {
    this.nameForm = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]]
    });
  }

  onUpdateNameAndSurname(): void {
    if (this.nameForm.valid && this.nameForm.valid) {
      const name = this.nameForm.get('name')?.value;
      const surname = this.nameForm.get('surname')?.value;

      this.profileService.updateUsername(name, surname)?.subscribe({
        next: (response) => {
          // Actualizar nombre y apellido en localStorage
          const userString = localStorage.getItem('user');
          if (userString) {
            const user = JSON.parse(userString);
            user.nombre = name; // Actualiza el nombre
            user.apellido = surname; // Actualiza el apellido
            localStorage.setItem('user', JSON.stringify(user)); // Guardar el usuario actualizado en localStorage
          }

          alert(`Nombre y apellido actualizados: ${name} ${surname}`);
        },
        error: (error) => {
          console.error('Error al actualizar el nombre y apellido:', error);
          alert('Hubo un error al intentar actualizar el nombre y apellido. Inténtalo más tarde.');
        }
      });
    } else {
      alert('Por favor, complete todos los campos requeridos.');
    }
  }
}
