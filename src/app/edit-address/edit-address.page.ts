import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FamilyDetails } from '../Models/familyDetails';
import { ApiService } from '../services/api.service';
import { LanguageService } from '../services/language.service';
// import { LanguageService } from 'src/src/app/services/language.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.page.html',
  styleUrls: ['./edit-address.page.scss'],
})
export class EditAddressPage implements OnInit {
  submitted: boolean = false
  constructor(private languageService: LanguageService, private apiService: ApiService) { }
  form = new FormGroup({
    address1: new FormControl('', [Validators.required]),
    address2: new FormControl('', [Validators.required]),
    address3: new FormControl('', [Validators.required]),
  })
  ngOnInit() {
    this.languageService._translateLanguage();
    this.apiService.getFamilyDetailsById(localStorage.getItem('userId'))
    .subscribe((res: FamilyDetails) => {
      console.log(res);
    },(err => {
      console.log(err);
    }))
  }

  f(controls) {
    return this.form.get(controls);
  }

  onSubmit(){
    this.submitted = true;

    if(this.form.invalid){
      return;
    } 

    console.log(this.form.value)
  }

}
