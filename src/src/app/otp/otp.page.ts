import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { ApiService } from "../services/api.service";
import { FormsService } from "../services/forms.service";
import { LanguageService } from "../services/language.service";

@Component({
  selector: "app-otp",
  templateUrl: "./otp.page.html",
  styleUrls: ["./otp.page.scss"],
})
export class OtpPage implements OnInit {
  submitted: boolean = false;
  showError: boolean = false;
  status: string;
  moNumber: string;
  form = new FormGroup({
    otp: new FormControl("", [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
    ]),
  });

  constructor(private router: Router,
     private apiService: ApiService,
     private languageService: LanguageService,
     private formService: FormsService,
     public alertController: AlertController,
     private route: ActivatedRoute) {}

  ngOnInit() {
    this.languageService._translateLanguage();
    this.moNumber = localStorage.getItem('moNumber');
    console.log(this.moNumber)
  }

  ionViewWillEnter() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("status")) {
        this.status = paramMap.get("status");
      }
    });
  }

  

  f(controls) {
    return this.form.get(controls);
  }

  otpResenet() {
    this.apiService.getOtpFromMoNumber(localStorage.getItem("moNumber"))
    .subscribe((res: any) => {
      console.log(res);
    },(err: any) => {
      console.log(err);
    });
    this.form.reset();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'ओटीपी मेल नहीं खाता, कृपया पुनः प्रयास करें!',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'नंबर पहले से रजिस्टर है',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.get("otp").value)
    this.apiService.verifyOtp({
      "mobileNo": this.moNumber,
      "otp": this.form.get('otp').value
  })
    .subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('userId', res.data._id);
      if(res.status === 200){
       
        this.router.navigate(["/form-one"]);
      }
      else{
        this.presentAlert2();
      }
    },(err) => {
      console.log(err)
      if(err.status === 404){
        this.presentAlert();
      }
    });
  }
}
