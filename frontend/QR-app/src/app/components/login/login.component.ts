import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
 
 
  constructor(private authService: AuthService, private formBuilder: FormBuilder,private router:Router) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }
  submit(): void {
    const user = this.loginForm.getRawValue();
  
    if (user.email === '' || user.password === '') {
      Swal.fire('Please enter your email and password');
    } else {
      this.authService.login(user).subscribe(
        (loginResponse: any) => {
          if (loginResponse) {
           
            if (loginResponse.qrCodePageUrl=='qrcode') {
              localStorage.setItem("user", JSON.stringify(loginResponse.user));
             
              this.authService.setAuthenticated(true);
              this.router.navigate(['qrcode'])
            }else {
              Swal.fire('please enter valid email or password');
            }
          } else {
            Swal.fire('An error occurred');
          }
        },
        (err) => {
          console.error(err);
          Swal.fire(err.message || 'An error occurred');
        }
      );
    }
  }
  setAuthenticated(arg0: boolean) {
    throw new Error('Method not implemented.');
  }
  
}