import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserBankDetails } from '../Models/userBankDetails';
import { ApiService } from '../services/api.service';
import { LanguageService } from '../services/language.service';
// import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.page.html',
  styleUrls: ['./bank-details.page.scss'],
})
export class BankDetailsPage implements OnInit {
  submitted: boolean = false;
  mode: string = 'create';
  id:string = '';
  bankId: string;
  bankDetails: UserBankDetails = new UserBankDetails();
  constructor(private apiService: ApiService, private languageService: LanguageService, private _Activatedroute:ActivatedRoute) { }
  form = new FormGroup({
    userId: new FormControl(''),
    ACOOUNT_NUMBER: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern("^[0-9]*$")]),
    IFSC: new FormControl('', [Validators.required]),
    ACCOUNT_HOLDER_NAME: new FormControl('', [Validators.required]),
    PHONE_NUMBER: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),  Validators.pattern("^[0-9]*$")]),
  })
  ngOnInit() {
    this.languageService._translateLanguage();

    this._Activatedroute.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("id")) {
        this.mode = "edit";
        this.id = paramMap.get("id");
        this.getBankDetails();
      } else {
        this.mode = "create";
        this.id = null;
      }
    });
  }

  f(controls) {
    return this.form.get(controls);
  }

  getBankDetails(){
    this.apiService.getBankDetailsById(localStorage.getItem('userId'))
    .subscribe((data: UserBankDetails[]) => {
      console.log(data);
      
      data.forEach(((res: any) => {
        this.bankId = res._id;
        this.bankDetails = res;
        console.log(this.bankDetails)
      }))
    },(err => { console.log(err) }));
  }

  onSubmit(){
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    console.log(this.form.value)
    this.form.value.userId = localStorage.getItem('userId');
    if (this.mode === "create") {
      console.log('if works')
      this.apiService.saveBankDetails(this.form.value);
      this.form.reset();
    } else {
      console.log('else works')
      console.log(this.form.value.userId)
      this.apiService.updateBankDetailsById(this.bankId, this.form.value)
      this.form.reset();
    }
  }

}
