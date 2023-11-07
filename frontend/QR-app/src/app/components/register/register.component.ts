
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { RegisterAuthService } from 'src/app/services/register-auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private authService: RegisterAuthService, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
    });
  }
  submit(): void {
    const user = this.registerForm.getRawValue();
  
    if (user.email === '' || user.password === '') {
      alert('Please enter your email and password');
    } else {
      this.authService.register(user).subscribe(
        (registrationResponse: any) => {
          if (registrationResponse) {
            if (registrationResponse.message === 'Registration success. A verification email has been sent to your email address') {
              Swal.fire('Registration successful. A verification email has been sent.');
              const recipientEmail: string = user.email;
  
              if (recipientEmail) {
                this.authService.sendVerificationEmail(recipientEmail).subscribe(
                  (verificationResponse: any) => {
                    if (verificationResponse) {
                      if (verificationResponse.message === 'Email sent successfully') {
                        Swal.fire('Verification email sent successfully.');
                      } else {
                        Swal.fire('Verification email sending failed. Please try again later.');
                      }
                    }
                  },
                  (error) => {
                    console.error('Verification email sending failed:', error);
                    Swal.fire('Verification email sending failed. Please try again later.');
                  }
                );
              } else {
                Swal.fire('Recipient email is required.');
              }
            } else {
              Swal.fire(registrationResponse.message || 'An error occurred');
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
}  
