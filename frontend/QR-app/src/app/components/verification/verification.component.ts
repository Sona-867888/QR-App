

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent  implements OnInit{
  [x: string]: any;
  verificationForm:FormGroup
  constructor(
   private formbuilder:FormBuilder,
   private http:HttpClient,
   private router:Router
  ){}
 
 
   ngOnInit(): void {
     this.verificationForm=this.formbuilder.group({
      
       email: ['', [Validators.required, Validators.email]],
      
     })
   }
  //  verifyEmail(recipientEmail: string) {
  //   if (recipientEmail) {
  //     this.http
  //       .post('http://localhost:3000/api/send-verification-email', {
  //         to: recipientEmail,
  //         subject: 'Email Verification',
  //         text: 'Please verify your email',
  //       })                            
  //       .subscribe(
  //         (response) => {
  //           if (response && response.toString().includes('Email sent successfully')) {
  //             alert('Email sent successfully.');
  //           } else {
  //             alert('Email sending failed. Please try again later.');
  //           }
  //         },
  //         (error) => {
  //           console.error('Email sending failed:', error);
  //           alert('Email sending failed. Please try again later.');
  //         }
  //       );
  //   } else {
  //     alert('Recipient email is required.');
  //   }
  // }

  verifyEmail(recipientEmail: string) {
    if (recipientEmail) {
      this.http
        .post('http://localhost:3000/api/verification', {
          to: recipientEmail,
          subject: 'Email Verification',
          text: 'Please verify your email',
        })
        .subscribe(
          (response) => {
            const msg: any = response;
            if (response && msg.message === 'Email sent successfully') {
              Swal.fire('Email sent successfully.');
             
            } else {
              alert('Email sending failed. Please try again later.');
            }
          },
          (error) => {
            console.error('Email sending failed:', error);
            Swal.fire('Email sending failed. Please try again later.');
          }
        );
    } else {
      Swal.fire('Recipient email is required.');
    }
  }
  
}
