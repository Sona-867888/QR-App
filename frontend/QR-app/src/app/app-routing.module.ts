import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './auth.guard'; 


import { QrcodeComponent } from './components/qrcode/qrcode.component';
import { NavComponent } from './components/nav/nav.component';
import { VerificationComponent } from './components/verification/verification.component';
import { QrcodeListComponent } from './qrcode-list/qrcode-list.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';

const routes: Routes = [

   { 
    path: 'qrcode', component: QrcodeComponent,
    canActivate: [AuthGuard] 
   } ,


   { path: 'qrcodelist', component: QrcodeListComponent,
     canActivate: [AuthGuard]
   },


   { path: 'userprofile', component: UserprofileComponent,
     canActivate: [AuthGuard]
   },


  {
    path: 'login',
    component: LoginComponent,
  
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'verification',component:VerificationComponent,
    canActivate: [AuthGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
