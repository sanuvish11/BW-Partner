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
  form = new FormGroup({
    number: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern("^[0-9]*$"),
    ]),
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
  }

  f(controls) {
    return this.form.get(controls);
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    localStorage.setItem("moNumber", this.form.get("number").value);
    console.log(this.form.get("number").value)
    this.apiService.getOtpFromMoNumber(this.form.get("number").value).subscribe((res: any) => {
      console.log(res);
      if(res){
        this.router.navigate(['/otp', res.status])
      }
    },(err) => {
      console.log(err);
    })
    // this.apiService.getOtp(this.form.get("number").value);
  }
}
