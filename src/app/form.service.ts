import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiUrl = 'your-api-endpoint'; // Remplacez par votre endpoint API

  constructor(private http: HttpClient) {}

  submitForm(form: any, apiUrl: string) {
    console.log({form})
    return this.http.post(apiUrl, form);
  }
}
