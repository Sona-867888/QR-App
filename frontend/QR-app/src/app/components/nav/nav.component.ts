import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isLoggedIn: boolean = false;

  constructor(private router: Router) {
    const token = localStorage.getItem('token');
   this.isLoggedIn=!!token
  }

  logout() {
    
   localStorage.removeItem('isEmailVerfied')
   localStorage.removeItem('user')
   this.isLoggedIn=false
   this.router.navigate(['/login'])
  }
  isQRCodePage(): boolean {
  return this.router.url.includes('/qrcode')
    
  }
  userprofile(){

  }


}
