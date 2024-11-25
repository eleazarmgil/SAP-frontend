import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../app/environments/environment'; // Asegúrate de que la ruta sea correcta
import { LoginRequest } from '../../models/login-request.model';
import { RegisterRequest } from '../../models/register-request.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl; // URL de la API desde el entorno

  constructor(private http: HttpClient, private router:Router) {}

  login(credentials: LoginRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/usuarios/login`, credentials);
  }

  register(data: RegisterRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/usuarios/registro`, data);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    this.router.navigate(['/auth']);
  }


}
