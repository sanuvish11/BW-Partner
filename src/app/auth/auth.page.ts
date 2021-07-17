import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;
  isLogin = true;
  submitted: boolean = false;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),  Validators.pattern("^[0-9]*$")]),
    password: new FormControl('', [Validators.required]),
  })
  constructor(private authService: ApiService) { }

  ngOnInit() {
  }

   onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }
  
  f(controls) {
    return this.form.get(controls);
  }
    onSubmit(){
    this.submitted = true;
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;

    if(this.form.invalid){
      return;
   }
    console.log(email);
    console.log(password);
    if(this.isLogin){
      this.authService.login(email, password);
    }else{
      this.authService.createUser(email, password);
    }
  
    }

}
