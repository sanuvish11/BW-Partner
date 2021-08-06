import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-family-details',
  templateUrl: './family-details.page.html',
  styleUrls: ['./family-details.page.scss'],
})
export class FamilyDetailsPage implements OnInit {
  submitted: boolean = false;
  familyFrom: any;
  CHILD_NAME: any = ''
  showDynamicChilds: boolean = false;
  numberValue: any[] = ["1", "2", "3", "4", "5"];
  allChildValue: any[] = [];
  fatherName: string = '';
  constructor(private languageService: LanguageService, private apiService: ApiService, private fb: FormBuilder) { }
  form = new FormGroup({
    userId: new  FormControl(''),
    FATHER_NAME: new FormControl('', [Validators.required]),
    FATHER_AGE: new FormControl('', [Validators.required]),
    MOTHER_AGE: new FormControl('', [Validators.required]),
    MOTHER_NAME: new FormControl('', [Validators.required]),
    WIFE_AGE: new FormControl('', [Validators.required]),
    WIFE_NAME: new FormControl('', [Validators.required]),
    CHILD_NAME1: new FormControl('', [Validators.required]),
    CHILD_NAME2: new FormControl('', [Validators.required]),
    CHILD_NAME3: new FormControl('', [Validators.required]),
    CHILD_NAME4: new FormControl('', [Validators.required]),
    CHILD_AGE1: new FormControl(null, [Validators.required]),
    CHILD_AGE2: new FormControl(null, [Validators.required]),
    CHILD_AGE3: new FormControl(null, [Validators.required]),
    CHILD_AGE4: new FormControl(null, [Validators.required])
    // CHILD_NAME: new FormControl('', [Validators.required]),
  })
  ngOnInit() {
    this.languageService._translateLanguage();
    this.familyFrom = this.fb.group({
      dataValue: [''],
      childValue: this.fb.array([this.createItems()]),
    });
    this.fatherName = localStorage.getItem('father_name');
  }

  f(controls) {
    return this.form.get(controls);
  }

  createItems(): FormGroup {
    return this.fb.group({
      CHILD_NAME: '',
      CHILD_AGE: '',
    });
  }

  addChilds(){
    let textBox = this.familyFrom.get('dataValue').value;
     if(textBox.length === 1){
      console.log(textBox);
      this.showDynamicChilds = true;
     }
     this.childDataValue.clear();
    for (let i = 1; i <=textBox; i++) {
      this.showDynamicChilds = true;
     this.childDataValue.push(this.createItems());
     console.log(this.childDataValue.controls);
    }

  }

  get childDataValue() {
    return this.familyFrom.get('childValue') as FormArray;
  }

  getChildValue(){
    this.allChildValue = [];
    this.childDataValue.controls.forEach((childData: any) => {
      this.allChildValue.push(childData.value);
    });
  }


  onSubmit(){
    this.submitted = true;
    // if(this.form.invalid){
    //   return;
    // } 

    this.form.value.userId = localStorage.getItem('userId');
    console.log(this.form.value)
    this.apiService.saveFamilyDetails(this.form.value);
  }

}
