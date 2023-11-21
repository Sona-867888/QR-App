import { Component } from '@angular/core';
import { UploadimageService } from 'src/app/services/uploadimage.service';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {

 file: File;

  constructor(private uploadimageService: UploadimageService) {}

   onselect(event: any) {
    this.file = event.target.files[0];
  }
  
  onupload(){
    if (this.file){
      this.uploadimageService.uploadImage(this.file).subscribe((response)=>{
      console.log("uplaoded successfully")
      },
      (error)=>{
        console.log("not uploaded",error)
      }
    );
    }
  }

}
