import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrcodeService {

  private apiUrl = 'http://localhost:3000/api';


  constructor(private http:HttpClient) { }

  saveQRCode(userId: string,inputText: string): Observable<any> {
    const requestBody = {
      userId,
      text:inputText,
    };
    // console.log(requestBody)
    return this.http.post(`${this.apiUrl}/saveqrcode`,requestBody);
  }


  generateQRCode(inputText: string): Observable<{ qrCode: string }> {
    return this.http.post<{ qrCode: string }>('http://localhost:3000/api/qrcode',{text:inputText})
  }

  getQrCodes(userId:string,inputText:string): Observable<any> {
//    console.log(userId)
//    let query =  new HttpParams().append("userId", userId);
  
//     return this.http.get(`${this.apiUrl}/qrcodelist`,{ params: query});
//  }
const params = new HttpParams()
.set('userId', userId)
.set('text', inputText);


return this.http.get(`${this.apiUrl}/qrcodelist`, { params });
}



deleteQRCode(qrCodeId: string): Observable<any> {
  return this.http.delete(`${this.apiUrl}/deleteqrcode/${qrCodeId}`);
}
}




  



  






