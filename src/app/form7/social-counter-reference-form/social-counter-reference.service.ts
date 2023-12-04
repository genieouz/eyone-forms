import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialCounterReferenceService {
  private apiUrl = 'http://your-api-endpoint/api'; // Remplacez par votre API

  constructor(private http: HttpClient) { }

  submitSocialCounterReference(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/counter-references`, formData);
  }


}
