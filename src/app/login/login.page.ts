import { ApiService } from './../services/api.service';
import { FormsService } from './../services/forms.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { mongo } from 'mongoose';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  submitted: boolean = false;
  form = new FormGroup({
    number: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),  Validators.pattern("^[0-9]*$")])
  })


  constructor(private router: Router,private camera: Camera, private formService: FormsService,
    private apiService: ApiService) { }
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  ngOnInit() {
    
  }

  f(controls) {
    return this.form.get(controls);
  }

 
  onSubmit(){
    this.submitted = true;
    const number = this.form.get('number').value;
    console.log(number)
    if(this.form.invalid){
      return;
    }
    this.apiService.getOtp(number);
    this.router.navigate(['/otp']);
  }
}
