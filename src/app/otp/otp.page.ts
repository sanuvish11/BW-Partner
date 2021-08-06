import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
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
  otpValue: string;
  moNumber: string;
  refferal_code: any;
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
     private route: ActivatedRoute,
     public loadingController: LoadingController) {}


     async getLoader(){
        const loading = await this.loadingController.create({
          message: 'Please wait for the otp...',
          duration: 3000
        });
  
        await loading.present();
     }

  ngOnInit() {
    this.languageService._translateLanguage();
    this.moNumber = localStorage.getItem('moNumber');
    this.refferal_code = localStorage.getItem('refferalCode');
    console.log(this.moNumber)

    setTimeout(() => {
      this.getLoader();
      this.otpValue = localStorage.getItem('otp');
      this.form.value.otp = this.otpValue;
    }, 50)
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
    console.log(localStorage.getItem('refferalCode'));
    this.apiService.verifyOtp({
      "mobileNo": this.moNumber,
      "otp": this.form.get('otp').value,
      referral_code: localStorage.getItem('refferalCode')
  }).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('refferalCode', res.data.referral_code)
      localStorage.setItem('walletAmount', res.data.wallet_amount)
      localStorage.setItem('userId', res.data._id);
      if(this.status === "201"){
        this.router.navigate(["/dashboard"]);
      }
      else{
        this.router.navigate(["/form-one"]);
      }
    },(err) => {
      console.log(err)
      if(err.status === 404){
        this.presentAlert();
      }
    });
  }
}
// 7897987987