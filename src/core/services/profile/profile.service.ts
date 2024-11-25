import { Injectable } from '@angular/core';
import { UpdateUserRequest } from '../../models/update-user-request.model';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  updateEmail(email: string) {
    // Extraer datos de localStorage
    const userString = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    // Verificar si el usuario existe en localStorage
    if (userString) {
      const user = JSON.parse(userString); // Convertir el string a objeto

      const userId = user.id;
      const userName = user.nombre;
      const userSurname = user.apellido;

      const data: UpdateUserRequest = {
        id: userId,
        email: email,
        nombre: userName,
        apellido: userSurname,
        telefonOficina: user.telefonOficina || '',
        ciudadId: user.ciudadId || 0
      };


      // Lógica para enviar el nuevo email al backend, por ejemplo:
      // this.httpClient.put(`${this.apiUrl}/update-email`, { id: userId, email, token });
    } else {
      console.error('No user found in localStorage');
    }
  }
}
