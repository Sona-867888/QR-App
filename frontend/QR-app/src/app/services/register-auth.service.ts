import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterAuthService {
  constructor(private http: HttpClient) {}

 
  setAuthenticated(status: boolean): void {
    localStorage.setItem('isEmailVerified', status ? 'true' : 'false');
  }

 
  isEmailVerified(): boolean {
    const status = localStorage.getItem('isEmailVerified');
    return status === 'true';
  }

  register(user: any): Observable<any> {
   
    return this.http.post<any>('http://localhost:3000/api/register', user);
  }

  sendVerificationEmail(email: string): Observable<any> {
   
    return this.http.post<any>('http://localhost:3000/api/send-verification-email', { email });
  }
}




