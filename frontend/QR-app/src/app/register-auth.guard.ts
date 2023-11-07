import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RegisterAuthService } from './services/register-auth.service';




@Injectable({
  providedIn: 'root',
})
export class RegisterAuthGuard implements CanActivate {
  constructor(private authService: RegisterAuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isEmailVerified()) {
      // this.router.navigate(['qrcode']);
      return true;
    } else {
   
      this.router.navigate(['login']);
      return false;
    }
  }
}

