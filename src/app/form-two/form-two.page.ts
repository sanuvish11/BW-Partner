import { FormsService } from './../services/forms.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.page.html',
  styleUrls: ['./form-two.page.scss'],
})
export class FormTwoPage implements OnInit {
  submitted: boolean = false;
  id: any;
  form = new FormGroup({
    address1: new FormControl('', [Validators.required]),
    address2: new FormControl('', [Validators.required]),
    address3: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    pincode: new FormControl('', [Validators.required])
  })
  constructor(private router: Router, private formService: FormsService) { }

  ngOnInit() {
    this.formService.getAllData()
    .subscribe((data: any) => {
      console.log(data)
      data.formData.forEach((data2: any) => {
       this.id =  data2._id;
      })
    });
    console.log(this.id)
  }

  f(controls) {
    return this.form.get(controls);
  }

  onSubmit(){
    this.submitted = true;

    // if(this.form.invalid){
    //   return;
    // }

    this.formService.updateFormData(this.id, this.form.value)
    .subscribe((data: any) => {
      if(data){
        this.router.navigate(['/form-three'])
      }
    });

    
   
  }

}
