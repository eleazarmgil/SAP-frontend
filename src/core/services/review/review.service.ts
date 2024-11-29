import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../app/environments/environment';
import { CreateReviewComponent } from '../../../app/pages/review/create-review/create-review.component';
import { Review } from '../../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(
    private storageService: StorageService,
    private http: HttpClient
  ) { }

  private apiUrl = environment.apiUrl; // URL de la API desde el entorno



  getAllReviewsByPsychologist(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/calificaciones/psicologo/${id}`);
  }

  getAllReviewsFromUser(id: string): Observable<any> {
    const token = this.storageService.getItem('token');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get<any>(`${this.apiUrl}/usuarios/${id}`, { headers });
  }

  createReview(data: Review): Observable<any> {
    const token = this.storageService.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`});

    return this.http.post<any>(`${this.apiUrl}/calificaciones`, data, { headers });
  }
}
