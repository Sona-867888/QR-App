import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api'
;
  public isAuthenticated = false;
  

  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }

  // sendVerificationEmail(email: string): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/send-verification-email`, { email });
  // }


  setAuthenticated(status: boolean): void {
    this.isAuthenticated=status;
  }

  isUserAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}