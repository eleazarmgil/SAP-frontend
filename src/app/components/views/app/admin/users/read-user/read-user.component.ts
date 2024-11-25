import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface User {
  id: number;
  name: string;
  role: string;
}

@Component({
  selector: 'app-read-user',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.scss'] // Corrige aquí
})
export class ReadUserComponent implements OnInit {
  users: User[] = [
    { id: 1, name: 'Juan Pérez', role: 'Administrador' },
    { id: 2, name: 'María Gómez', role: 'Usuario' },
    { id: 3, name: 'Carlos López', role: 'Moderador' },
  ];

  constructor() {}

  ngOnInit(): void {}

  viewUser(user: User): void {
    console.log('Ver usuario:', user);
  }

  deleteUser(userId: number): void {
    this.users = this.users.filter(user => user.id !== userId);
    console.log('Usuario eliminado con ID:', userId);
  }
}
