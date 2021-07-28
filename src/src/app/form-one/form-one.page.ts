import { FormsService } from './../services/forms.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BwUsers } from '../Models/bwUsers';
import { LanguageService } from '../services/language.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.page.html',
  styleUrls: ['./form-one.page.scss'],
})
export class FormOnePage implements OnInit {
  submitted: boolean = false;
  moNumber: string;
  usersData: BwUsers = new BwUsers();
  form = new FormGroup({
    moNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),  Validators.pattern("^[0-9]*$")]),
    adharNumber: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(12),  Validators.pattern("^[0-9]*$")]),
    firstName: new FormControl('', [Validators.required]),
    middleName: new FormControl(''),
    lastName: new FormControl('', [Validators.required]),
    date_of_birth: new FormControl('', [Validators.required]),
    fatherName: new FormControl('', [Validators.required]),

    address1: new FormControl(''),
    address2: new FormControl(''),
    address3: new FormControl(''),
    area: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    pincode: new FormControl(''),

    SKILLS: new FormControl(""),
    CORE_SKILLS: new FormArray([]),
    WORK_EXPERIENCE: new FormArray([]),
    
    adharFront: new FormControl(null),
    adharBack: new FormControl(null),
    addressProof: new FormControl(null),
    agreement: new FormControl(null),
  })
  constructor(private router: Router, private formService: FormsService,
     private languageService: LanguageService, private apiService: ApiService) { 
  }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.moNumber = localStorage.getItem('moNumber');
    // this.getAllUsersData();
    this.usersData._id = localStorage.getItem('userId');
    console.log(this.usersData._id)
    this.languageService._translateLanguage();
    this.getUserById();
  }

  f(controls) {
    return this.form.get(controls);
  }

  getUserById(){
    this.apiService.getBwUsersById(this.usersData._id).subscribe((res: any) => {
      console.log(res);
      this.usersData = res.data;
    },(err => console.log(err)))
  }

  getAllUsersData(){
    this.formService.getAllData()
    .subscribe((res: any) => {
      res.formData.forEach((data: BwUsers) => {
        console.log(data)
        this.usersData = data;
        console.log(this.usersData)
      })
      
    },(err) => { console.log(err)});
  }

  setFormValues(){
    this.form.value.moNumber = localStorage.getItem('moNumber');
    this.form.value.address1 = this.usersData.address1;
    this.form.value.address2 = this.usersData.address2,
    this.form.value.address3 =this.usersData.address3,
    this.form.value.area =this.usersData.area,
    this.form.value.city =this.usersData.city,
    this.form.value.state =this.usersData.state,
    this.form.value.pincode = this.usersData.pincode

    this.form.value.CORE_SKILLS = this.usersData.CORE_SKILLS;
    this.form.value.WORK_EXPERIENCE = this.usersData.WORK_EXPERIENCE;
  }

  onSubmit(){
    this.submitted = true;

    if(this.form.invalid){
      return;
    }

    this.setFormValues();
    
      this.formService.updateFormData(localStorage.getItem('userId'), this.form.value)
      .subscribe((data: any) => {
        if(data){
          this.router.navigate(['/form-two']);
        }
      },(err => {console.log(err)}));
    }
}
