import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private url = 'https://formspree.io/f/mjvqrvrq';
  constructor(private http: HttpClient) {}

  sendEmail(Email: any) {
    return this.http.post<any>(this.url, Email);
  }
}
