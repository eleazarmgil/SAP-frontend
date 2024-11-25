import { Injectable } from '@angular/core';
import { UpdateUserRequest } from '../../models/update-user-request.model';
import { environment } from '../../../app/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl; // URL de la API desde el entorno

  updateEmail(email: string): Observable<any> {
    // Extraer datos de localStorage
    const userString = localStorage.getItem('user');
    const token = localStorage.getItem('token');

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
        telefonOficina: user.telefonOficina,
        ciudadId: user.ciudadId
      };

      // Configurar encabezados
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}` // Agregar el token Bearer
      });

      // Realizar la solicitud PATCH
      return this.http.patch<any>(`${this.apiUrl}/usuarios/ActualizarUsuario/${data.id}`, data, { headers });
    } else {
      console.error('No user found in localStorage');
      return EMPTY; // Retornar un observable vacío
    }
  }
}
