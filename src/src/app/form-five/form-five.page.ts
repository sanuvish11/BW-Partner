import { FormsService } from './../services/forms.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-five',
  templateUrl: './form-five.page.html',
  styleUrls: ['./form-five.page.scss'],
})
export class FormFivePage implements OnInit {
  id: string;
  form = new FormGroup({
    agreement: new FormControl('')
  })
  constructor(private formService: FormsService) { }

  ngOnInit() {
    this.formService.getAllData()
    .subscribe((data: any) => {
      console.log(data)
      data.formData.forEach((data2: any) => {
       this.id =  data2._id;
      })
    });
  }

  onSubmit(){
    console.log(this.form.value);
    this.formService.updateFormData(this.id, this.form.value)
    .subscribe((data: any) => {
      if(data){
       
      }
    });
  }

  getCheckedValue(value){
    console.log(value)
    this.form.value.agreement = value.detail.value;
  }

}
