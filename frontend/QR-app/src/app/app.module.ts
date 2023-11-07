import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule}from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { RegisterComponent } from './components/register/register.component';
import { QrcodeComponent } from './components/qrcode/qrcode.component';
import { VerificationComponent } from './components/verification/verification.component';
import { QrcodeListComponent } from './qrcode-list/qrcode-list.component';



@NgModule({
  declarations: [
    AppComponent,

    LoginComponent, 
    NavComponent,
    RegisterComponent,
    QrcodeComponent,
    VerificationComponent,
    QrcodeListComponent,
   
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
