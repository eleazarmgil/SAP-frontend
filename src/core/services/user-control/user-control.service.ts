import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../app/environments/environment';
import { StorageService } from '../storage/storage.service';
import { UpdatePsychologistRequest } from '../../models/update-psychologist-request.model';

@Injectable({
  providedIn: 'root'
})
export class UserControlService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  private apiUrl = environment.apiUrl; // URL de la API desde el entorno

  getAllUsers(): Observable<any> {
    const token = this.storageService.getItem('token');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get<any>(`${this.apiUrl}/usuarios`, { headers });
  }

  getUserByID(id: string): Observable<any> {
    const token = this.storageService.getItem('token');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get<any>(`${this.apiUrl}/usuarios/${id}`, { headers });
  }

  verifyPsychologist(id: string | null): Observable<any> {
    const token = this.storageService.getItem('token');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const data: UpdatePsychologistRequest = {
      id: id,
      email: null,
      nombre: null,
      apellido: null,
      numeroColegiatura: null,
      telefonOficina: null,
      descripcionPsicologo: null,
      calle_Av: null,
      verificado: "V",
      experiencia: null,
      formacion: null,
      tipoTerapia: null,
      ciudadId: null,
    };
    return this.http.patch<any>(`${this.apiUrl}/usuarios/ActualizarPsicologo/${id}`, data, { headers });
  }

  unverifyPsychologist(id: string | null): Observable<any> {
    const token = this.storageService.getItem('token');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const data: UpdatePsychologistRequest = {
      id: id,
      email: null,
      nombre: null,
      apellido: null,
      numeroColegiatura: null,
      telefonOficina: null,
      descripcionPsicologo: null,
      calle_Av: null,
      verificado: "F",
      experiencia: null,
      formacion: null,
      tipoTerapia: null,
      ciudadId: null,
    };
    return this.http.patch<any>(`${this.apiUrl}/usuarios/ActualizarPsicologo/${id}`, data, { headers });
  }
}
