import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../app/environments/environment';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserControlService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  private apiUrl = environment.apiUrl; // URL de la API desde el entorno

  getAllUsers(): Observable<any> {
    // Extraer datos de localStorage
    const token = this.storageService.getItem('token');

    // Configurar encabezados
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Agregar el token Bearer
    });

    // Realizar la solicitud GET
    return this.http.get<any>(`${this.apiUrl}/usuarios`, { headers });
  }
}
