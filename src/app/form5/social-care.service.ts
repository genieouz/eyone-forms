import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialCareService {
  private apiUrl = '/api'; // Remplacez par votre base endpoint API

  constructor(private http: HttpClient) {}

  getServices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/services`);
  }

  getNatureOfServices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/nature-of-services`);
  }

  findPatientByNiup(niup: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/patients/${niup}`);
  }
}
