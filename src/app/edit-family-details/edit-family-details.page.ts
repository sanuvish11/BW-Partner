import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FamilyDetails } from '../Models/familyDetails';
import { ApiService } from '../services/api.service';
// import { ApiService } from 'src/src/app/services/api.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-edit-family-details',
  templateUrl: './edit-family-details.page.html',
  styleUrls: ['./edit-family-details.page.scss'],
})
export class EditFamilyDetailsPage implements OnInit {
  submitted: boolean = false;
  familyFrom: any;
  CHILD_NAME: any = ''
  familyData: any = {}
  finalValue: any[] = [];
  constructor(private languageService: LanguageService, private apiService: ApiService, private fb: FormBuilder) { }

  form = new FormGroup({
    userId: new  FormControl(''),
    FATHER_NAME: new FormControl('', [Validators.required]),
    FATHER_AGE: new FormControl('', [Validators.required]),
    MOTHER_AGE: new FormControl('', [Validators.required]),
    MOTHER_NAME: new FormControl('', [Validators.required]),
    WIFE_AGE: new FormControl('', [Validators.required]),
    WIFE_NAME: new FormControl('', [Validators.required]),
    CHILD_DETAIL: new FormArray([]),
    CHILD_NAME1: new FormControl('', [Validators.required]),
    CHILD_NAME2: new FormControl('', [Validators.required]),
    CHILD_NAME3: new FormControl('', [Validators.required]),
    CHILD_NAME4: new FormControl('', [Validators.required]),
    CHILD_AGE1: new FormControl('', [Validators.required]),
    CHILD_AGE2: new FormControl('', [Validators.required]),
    CHILD_AGE3: new FormControl('', [Validators.required]),
    CHILD_AGE4: new FormControl('', [Validators.required])
    // CHILD_NAME: new FormControl('', [Validators.required]),
  })
  ngOnInit() {
    this.languageService._translateLanguage();
    this.getFamily();
    this.form.value.userId = localStorage.getItem('userId');
  }
  

  getFamily(){
    this.apiService.getFamilyDetailsById(localStorage.getItem('userId'))
      .subscribe((res: any) => {
        this.familyData = res.data;
      }, (err => { console.log(err)}));
  }

  f(controls) {
    return this.form.get(controls);
  }




  onSubmit(){
    this.form.value.userId = localStorage.getItem('userId');
    console.log(this.form.value);
    this.apiService.updateFamilyDetails(localStorage.getItem('userId'), this.form.value);  
  } 

}
