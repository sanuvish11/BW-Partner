import { FormsService } from './../services/forms.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.page.html',
  styleUrls: ['./form-one.page.scss'],
})
export class FormOnePage implements OnInit {
  submitted: boolean = false;
  
  form = new FormGroup({
    moNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),  Validators.pattern("^[0-9]*$")]),
    adharNumber: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    middleName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    fatherName: new FormControl('', [Validators.required]),
  })
  constructor(private router: Router, private formService: FormsService) { }

  ngOnInit() {
    this.formService.getAllData();
  }

  f(controls) {
    return this.form.get(controls);
  }

  onSubmit(){
    this.submitted = true;

    // if(this.form.invalid){
    //   return;
    // }
    console.log(this.form.value)
    //this.formService.saveFormData(this.form.value);
    this.router.navigate(['/form-two'])
   
  }

}
