import { Injectable } from '@angular/core';
import { UpdateUserRequest } from '../../models/update-user-request.model';
import { environment } from '../../../app/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { UpdatePsychologistRequest } from '../../models/update-psychologist-request.model';

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
  updatePsychologist(data: UpdatePsychologistRequest): Observable<any> {
    // Extraer datos de localStorage
    const userString = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (userString) {
      const user = JSON.parse(userString); // Convertir el string a objeto

      const userId = user.id;
      const email = user.email; // Suponiendo que ya tienes el correo en el objeto

      const updateData: UpdatePsychologistRequest = {
        id: userId,
        email: data.email,
        nombre: data.nombre,
        apellido: data.apellido,
        numeroColegiatura: data.numeroColegiatura,
        telefonOficina: data.telefonOficina,
        descripcionPsicologo: data.descripcionPsicologo,
        calle_Av: data.calle_Av,
        verificado: data.verificado,
        experiencia: data.experiencia,
        formacion: data.formacion,
        tipoTerapia: data.tipoTerapia,
        ciudadId: data.ciudadId
      };

      // Configurar encabezados
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}` // Agregar el token Bearer
      });

      // Realizar la solicitud PATCH
      return this.http.patch<any>(`${this.apiUrl}/usuarios/ActualizarPsicologo/${userId}`, updateData, { headers });
    } else {
      console.error('No user found in localStorage');
      return EMPTY; // Retornar un observable vacío
    }
  }

  updateUsername(name: string, surname: string): Observable<any> {
    // Extraer datos de localStorage
    const userString = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    // Verificar si el usuario existe en localStorage
    if (userString) {
      const user = JSON.parse(userString); // Convertir el string a objeto

      const userId = user.id;
      const email = user.email; // Suponiendo que ya tienes el correo en el objeto

      const data: UpdateUserRequest = {
        id: userId,
        email: email,
        nombre: name,
        apellido: surname,
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
