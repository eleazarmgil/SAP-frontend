import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router:Router){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Obtener el token de localStorage
        const token = localStorage.getItem('token');

        // Clonar la solicitud para agregar el nuevo encabezado
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(request).pipe(
            catchError(err => {
                // Manejar el error 401
                if (err.status === 401) {
                    console.error('No autorizado - redirigiendo a la página de inicio de sesión');
                    this.router.navigate(['/auth']);
                }
                return throwError(err);
            })
        );
    }
}
