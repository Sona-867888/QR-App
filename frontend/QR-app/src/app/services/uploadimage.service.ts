import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadimageService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http:HttpClient) {}

  uploadImage(file: File) {
    const formData = new FormData();
    formData.append('image', file);
    return this.http.post(`http://localhost:3000/upload`,formData);
  }
}
 