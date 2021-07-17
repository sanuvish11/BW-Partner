import { Router } from '@angular/router';
import { FormsService } from './../services/forms.service';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-fourth',
  templateUrl: './form-fourth.page.html',
  styleUrls: ['./form-fourth.page.scss'],
})
export class FormFourthPage implements OnInit {
  id: string;
  multipleImageUpload: any[] = [];
  formData: any = {}
  frontAdhar: string;
  backAdhar: string;
  address: string;
  form = new FormGroup({
    adharFront: new FormControl(null),
    adharBack: new FormControl(null),
    addressProof: new FormControl(null)
  })
  constructor(private camera: Camera, private formService: FormsService,
    private router: Router) { }
   options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  ngOnInit() {
    this.formService.getAllData()
    .subscribe((data: any) => {
      this.formData = data;
      console.log(this.formData)
      this.formData.formData.forEach((data2: any) => {
       this.id =  data2._id;
      })
    });
  }

  getAdharForntPhoto(){
    this.camera.getPicture(this.options).then((imageData) => {
      const date = new Date().valueOf();
    const imageName = date+ '.jpeg';
      this.frontAdhar = 'data:image/jpeg;base64,' + imageData;
      // this.frontAdhar = base64Image;
      const imageBlob =  this.dataURItoBlob(imageData);
      const file :File= new File([imageBlob], imageName, { type: 'image/jpeg' });
      this.form.patchValue({ adharFront: file });
      this.form.get("adharFront").updateValueAndValidity();
      console.log(this.form.value.adharFront);
      this.multipleImageUpload.push(this.form.value.adharFront);
      // this.formService.saveImages(file); 
     });
  }

  getAdharBackPhoto(){
    this.camera.getPicture(this.options).then((imageData) => {
      const date = new Date().valueOf();
    const imageName = date+ '.jpeg';
       this.backAdhar  = 'data:image/jpeg;base64,' + imageData;
      // this.backAdhar = base64Image;
      const imageBlob =  this.dataURItoBlob(imageData);
      const file :File= new File([imageBlob], imageName, { type: 'image/jpeg' });
      this.form.patchValue({ adharBack: file });
      this.form.get("adharBack").updateValueAndValidity();
      console.log(this.form.value.adharBack)
      this.multipleImageUpload.push(this.form.value.adharBack);
      // this.formService.saveImages(file); 
     });
  }

  getAddressProofPhoto(){
    this.camera.getPicture(this.options).then((imageData) => {
      const date = new Date().valueOf();
    const imageName = date+ '.jpeg';
      this.address = 'data:image/jpeg;base64,' + imageData;
      // this.address = base64Image
      const imageBlob =  this.dataURItoBlob(imageData);
      const file :File= new File([imageBlob], imageName, { type: 'image/jpeg' });
      this.form.patchValue({ addressProof: file });
      this.form.get("addressProof").updateValueAndValidity();
      console.log(this.form.value.addressProof)
      this.multipleImageUpload.push(this.form.value.addressProof);
      // this.formService.saveImages(file); 
     });
  }

  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
   const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
     }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });  
    console.log(blob)  
    return blob;
  }

onSubmit(){
    console.log(this.form.value);
    console.log(this.multipleImageUpload);
    const formData = new FormData();
    for(let img of this.multipleImageUpload){
      formData.append('images', img);
    }
    console.log(formData);
    this.formService.updateFormDataImages(this.id, formData).subscribe((data: any) => {
      console.log(data);
      if(data){
        this.router.navigate(['/form-five']);
      }
    },(err) => {
      console.log(err);
    })
  }

}
