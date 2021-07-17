import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  submitted: boolean = false;
  form = new FormGroup({
    otp: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),  Validators.pattern("^[0-9]*$")]),
  })
  constructor(private router: Router) { }

  ngOnInit() {
  }

  f(controls) {
    return this.form.get(controls);
  }

  onSubmit(){
    this.submitted = true;
    
    // if(this.form.invalid){
    //   return;
    // }
    this.router.navigate(['/form-one'])
  }

}
