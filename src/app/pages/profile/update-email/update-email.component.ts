import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-email',
  templateUrl: './update-email.component.html',
  styleUrl: './update-email.component.scss',
  standalone:true,
  imports:[CommonModule, ReactiveFormsModule]
})
export class UpdateEmailComponent implements OnInit {
  emailForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.emailForm.valid) {
      const email = this.emailForm.get('email')?.value;
      // Lógica para actualizar el correo electrónico
      alert(`Correo electrónico actualizado: ${email}`);
    } else {
      alert('Por favor, ingrese un correo electrónico válido.');
    }
  }
}
