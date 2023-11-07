import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrcodeService {

  private apiUrl = 'http://localhost:3000/api';


  constructor(private http:HttpClient) { }

  saveQRCode(userId: string, text: string): Observable<any> {
    const requestBody = {
      userId,
      text,
    };
    console.log(requestBody)
    return this.http.post(`${this.apiUrl}/saveqrcode`,requestBody);
  }


  generateQRCode(inputText: string): Observable<{ qrCode: string }> {
    return this.http.post<{ qrCode: string }>('http://localhost:3000/api/qrcode',{text:inputText})
  }

  getQrCodes(userId:string): Observable<any> {
   console.log(userId)
   let query =  new HttpParams().append("userId", userId);
  
    return this.http.get(`${this.apiUrl}/qrcodelist`,{ params: query});
 }
}


  



  






