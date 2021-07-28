import { Router } from '@angular/router';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Console } from 'console';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.page.html',
  styleUrls: ['./user-login.page.scss'],
})
export class UserLoginPage implements OnInit {
  typeOfJob: any[] = ["Manager",
  "Clerk",
  "Data Manager",
  "Doctor",
  "Software Developer"
  ];
  constructor(private apiService: ApiService, private router: Router) { }
  form = new FormGroup({
    MOBILE_NUMBER: new FormControl(''),
    PASSWORD: new FormControl('', [Validators.required]),
    JOB_TYPE: new FormControl('', [Validators.required]),
  })
  ngOnInit() {
    
  }

  onSubmit(){
    console.log(this.form.value);
    this.apiService.subUserLogin(this.form.value)
    .subscribe((data: any) => {
      console.log(data);
      if(data.STATUS === 200){
        this.router.navigate(['/home']);
      }
    },(err => {console.log(err)}))
  }

}
