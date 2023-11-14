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
inputText: string = '';
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
 console.log(this.userId)
 console.log(this.inputText)
  this.qrCodeService.getQrCodes(this.userId,this.inputText).subscribe((res)=>{
    if(res){
      this.qrCodes = res;
      this.inputText= res;
    }

  });
   
}  
   
  editQRCode(qrCodeId: string, newText: string) {
    this.qrCodeService.editQRCode(qrCodeId, newText).subscribe((response) => {
      console.log('edit qrcode service', response);
      this.getQrCodes(); 
    });
  }

  deleteQRCode(qrCodeId: string) {
    this.qrCodeService.deleteQRCode(qrCodeId).subscribe((response) => {
      console.log('delete qrcode service', response);
      this.getQrCodes(); 
    });
  }
  }



  
 


