import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private apiUrl = environment.apiUrl; // URL de la API desde el entorno

  constructor(
    private storageService: StorageService,
    private http: HttpClient
  ) { }

  getAllContent(): Observable<any> {
    const token = this.storageService.getItem('token');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get<any>(`${this.apiUrl}/trastornos`, { headers });
  }

  getContentByID(id: string): Observable<any> {
    const token = this.storageService.getItem('token');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get<any>(`${this.apiUrl}/trastornos/${id}`, { headers });
  }
}
