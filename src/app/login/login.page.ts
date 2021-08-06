import { ApiService } from "./../services/api.service";
import { FormsService } from "./../services/forms.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { mongo } from "mongoose";
import { LanguageService } from "../services/language.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  submitted: boolean = false;
  showTextBox: boolean = false;
  showError: boolean = false;
  form = new FormGroup({
    number: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern("^[0-9]*$"),
    ]),
    REFERAL_CODE: new FormControl("")
  });

  constructor(
    private router: Router,
    private camera: Camera,
    private languageService: LanguageService,
    private apiService: ApiService
  ) {}
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
  };

  ngOnInit() {
    this.languageService._translateLanguage();
    this.form.reset();
    localStorage.clear();
    this.showTextBox = false;
    this.submitted = false;
  }

  f(controls) {
    return this.form.get(controls);
  }

  getCheckedValue(checkValue) {
    if(checkValue.detail.checked == true){
      this.showTextBox = true;
      console.log(this.showTextBox);
    } 
    else{
      this.showTextBox = false;
      this.showError = false;
      console.log(this.showTextBox);
    }
  }

  // "bhF38QHK"
  // 2312312312

  getOtpOfUsers(){
    this.apiService.getOtpFromMoNumber(this.form.get("number").value).subscribe(
      (res: any) => {
        console.log(res);
        if (res) {
          localStorage.setItem('otp', res.otp)
          this.form.reset();
          this.router.navigate(["/otp", res.status]);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    localStorage.setItem("moNumber", this.form.get("number").value);
    console.log(this.form.invalid)
    if (this.form.invalid) {
      return;
    }
    // snks
    console.log(this.form.value.REFERAL_CODE)
    // this.form.value.REFERAL_CODE = "pvSJxrR8";
    console.log(this.showTextBox)
    if(this.showTextBox){
      console.log('under if');
      this.apiService.verifyRefferalCode(this.form.value.REFERAL_CODE).subscribe((res: any) => {
        if(res.status === 200){
          localStorage.setItem('refferalCode', this.form.value.REFERAL_CODE);
          this.getOtpOfUsers();
        }
        else{
          
        }
      },(err => {
        console.log(err) 
        if(err.status === 404){
          this.showError = true;
          return;
        }
      }))
    }
    else{
      console.log('under else');
      this.getOtpOfUsers();
    }

    
    
    
  }
}
