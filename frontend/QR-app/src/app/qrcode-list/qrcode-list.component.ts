import { Component, OnInit } from '@angular/core';
import { QrcodeService } from '../services/qrcode.service';

@Component({
  selector: 'app-qrcode-list',
  templateUrl: './qrcode-list.component.html',
  styleUrls: ['./qrcode-list.component.css']
})
export class QrcodeListComponent implements OnInit{
//  ngOnInit(): void {
//    throw new Error('Method not implemented.');
//  }
qrCodes: any[] = [];
user:any;
userId:any;


constructor(private qrCodeService: QrcodeService) {}

ngOnInit() {
  this.getQrCodes();
}

getQrCodes() { 
  // console.log(localStorage.getItem('user'))
  this.user=localStorage.getItem("user")
  this.user= JSON.parse(this.user)
  this.userId=this.user._id
  this.qrCodeService.getQrCodes(this.userId).subscribe((response)=>{
   console.log(" get qr ",response) 
   this.qrCodes=response

  });
   
}  
   
  editQRCode(qrCode: any) {
    
  }

  deleteQRCode(id: string) {
 
  }
}



  
 


