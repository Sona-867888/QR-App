import { Component } from '@angular/core';
import { QrcodeService } from 'src/app/services/qrcode.service';


@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent {
  inputText: string = '';
  qrCode: string | null = null;
  user:any;
  // text:string;

  constructor(private qrCodeService: QrcodeService) {}

  generateQRCode() {
    if (this.inputText) {
      this.qrCodeService.generateQRCode(this.inputText).subscribe(
        (data) => {
          this.qrCode = data.qrCode;
        },
        (error) => {
          console.error('Error generating QR code:', error);
        }
      );
    }
  }


  // downloadQRCode() {
  //   if (this.qrCode) {

      
  //     const a = document.createElement('a');
  //     a.href = this.qrCode;
  //     a.download = 'qrcode.png';
  //     a.style.display = 'none';
  //     a.click();
      
  //   }
  // }


  saveQRCode() {
    this.user=localStorage.getItem("user")
    this.user= JSON.parse(this.user)
    console.log("Input Text:", this.inputText);

    this.qrCodeService.saveQRCode(this.user._id, this.inputText).subscribe((response) => {   
    console.log("qrcode service",response)  
    });
  }
}
      
    

  

