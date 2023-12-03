import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialReferenceService {
  private apiUrl = '/api'; // Remplacez par votre base endpoint API

  constructor(private http: HttpClient) {}

  getReferenceReasons(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/reference-reasons`);
  }

  searchPatient(query: string): Observable<any[]> {
    return new Observable(observer => {
      observer.next([{ name: "Ousmane Sakho", id: 1 }, { name: "Henri", id: 2 }].filter( d => d.name.toLowerCase().includes(query.toLowerCase())));
    })
    return this.http.get<any[]>(`${this.apiUrl}/patients/search`, { params: { query } });
  }

  // Ajouter des méthodes pour créer un patient ou un motif de référence si nécessaire
  // ...
}
