import { FormsService } from './../services/forms.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BwUsers } from '../Models/bwUsers';
import { LanguageService } from '../services/language.service';
import { ApiService } from '../services/api.service';
import { AgeValidators } from '../custum-validation/age-validation';



@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.page.html',
  styleUrls: ['./form-two.page.scss'],
})
export class FormTwoPage implements OnInit {
  submitted: boolean = false;
  id: string;
  pincodeCheck: boolean = false;
  pincodeCheckONSubmit: boolean = false;
  moNumber: string = '';
  postalAreas: any[] = [];
  autoCity: any = '';
  showAreasValues: boolean = false;
  autoState: any = '';
  usersData: BwUsers = new BwUsers();
  dateValidation: boolean = false;
  castData = ["सामान्‍य", "पिछड़ा वर्ग", "अनुसूचित जाति", "अनुसूचित जनजाति"]

  form = new FormGroup({
    moNumber: new FormControl(''),
    adharNumber: new FormControl(''),
    firstName: new FormControl(''),
    middleName: new FormControl(''),
    lastName: new FormControl(''),
    date_of_birth: new FormControl(''),
    fatherName: new FormControl(''),
    cast: new FormControl('', [Validators.required]),
    address1: new FormControl('', [Validators.required]),
    address2: new FormControl('', [Validators.required]),
    address3: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    // postal_area: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    pincode: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")])
  })
  constructor(private router: Router, private formService: FormsService, private languageService: LanguageService, private apiService: ApiService) { }

  ngOnInit() {
    this.languageService._translateLanguage();
  }

  ionViewWillEnter(){
    this.moNumber = localStorage.getItem('moNumber');
    this.usersData._id = localStorage.getItem('userId');
    console.log(this.usersData._id);
    // this.getAllUsersData();
    this.getUserById();
  }

    dateget(value){
      console.log(value);
    }

    
  getUserById(){
    console.log(this.usersData)
    this.apiService.getBwUsersById(this.usersData._id).subscribe((res: any) => {
      console.log(res.data)
      this.usersData = res.data;
      console.log(this.usersData)
    },(err => console.log(err)))
  }

  f(controls) {
    return this.form.get(controls);
  }

  getAllUsersData(){
    this.formService.getAllData()
    .subscribe((res: any) => {
      res.formData.forEach((data: BwUsers) => {
        console.log(data)
        this.id =  data._id;
        this.usersData = data;
        console.log(this.usersData)
      })
      
    },(err) => { console.log(err)});
  }

  updateUserData(){
    this.usersData._id = localStorage.getItem('userId');
    this.formService.updateFormData(localStorage.getItem('userId'), this.form.value)
    .subscribe((data: any) => {
      if(data){
        this.router.navigate(['/form-three'])
      }
    },(err => { console.log(err) }));
  }

  

  callApiForPinCode(){
    this.apiService.getValuesFromPincode(this.form.get('pincode').value)
    .subscribe((res: any) => {
      if(res.length != 0){
        this.pincodeCheck = false;
        res.forEach((data: any) => {
          this.autoCity = data.divisionname;
          this.autoState = data.circlename;
          this.postalAreas.push(data.officename)
        })
      }
      else{
          this.pincodeCheck = true;
          this.postalAreas = [];
          this.autoState = '';
          this.autoCity = '';
          // this.usersData = new BwUsers();
      }
    },(err => {console.log(err)}));
  }

  getAreas(){
    console.log('working')
    this.showAreasValues = true;
    console.log(this.form.value.area)
  }

  onSubmit(){
    this.submitted = true;
    this.form.value.moNumber = this.moNumber;
    
    this.form.value.adharNumber = this.usersData.adharNumber,
    this.form.value.firstName =this.usersData.firstName,
    this.form.value.middleName =this.usersData.middleName,
    this.form.value.lastName =this.usersData.lastName,
    this.form.value.date_of_birth =this.usersData.date_of_birth,
    this.form.value.fatherName = this.usersData.fatherName
  
      if(this.form.invalid){
        return;
      } 
      else if(this.pincodeCheck == true){
        return
      }

      console.log(this.form.value)

     this.updateUserData();
    
   
  }

}
