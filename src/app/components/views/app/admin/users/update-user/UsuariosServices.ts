import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UsuarioDto, UsuarioRegistroDto, UsuarioLoginDto, UsuarioActualizarDto, UsuarioActualizarPsicologoDto } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiUrl = 'https://localhost:7010/api/usuarios'; 

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<UsuarioDto[]> {
    return this.http.get<UsuarioDto[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getUsuario(usuarioId: string): Observable<UsuarioDto> {
    return this.http.get<UsuarioDto>(`${this.apiUrl}/${usuarioId}`).pipe(
      catchError(this.handleError)
    );
  }

  getUsuarioPsicologo(nombre: string): Observable<UsuarioDto[]> {
    return this.http.get<UsuarioDto[]>(`${this.apiUrl}/GetUsuarioPsicologo?nombre=${nombre}`).pipe(
      catchError(this.handleError)
    );
  }

  registro(usuarioRegistroDto: UsuarioRegistroDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/registro`, usuarioRegistroDto).pipe(
      catchError(this.handleError)
    );
  }

  login(usuarioLoginDto: UsuarioLoginDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, usuarioLoginDto).pipe(
      catchError(this.handleError)
    );
  }

  actualizarPsicologo(userId: string, psicologoActualizarDto: UsuarioActualizarPsicologoDto): Observable<any> {
    return this.http.patch(`${this.apiUrl}/ActualizarPsicologo/${userId}`, psicologoActualizarDto).pipe(
      catchError(this.handleError)
    );
  }

  actualizarUsuario(userId: string, usuarioActualizarDto: UsuarioActualizarDto): Observable<any> {
    return this.http.patch(`${this.apiUrl}/ActualizarUsuario/${userId}`, usuarioActualizarDto).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Errores del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Errores del lado del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
