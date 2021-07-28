import { SubUsers } from './../Models/subUsers';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-admin-create-user',
  templateUrl: './admin-create-user.page.html',
  styleUrls: ['./admin-create-user.page.scss'],
})
export class AdminCreateUserPage implements OnInit {
  typeOfJob: any[] = ["Manager",
 "Clerk",
 "Data Manager",
 "Doctor",
 "Software Developer"
 ];
 private mode = "create";
 id: string = '';
 userData: SubUsers = new SubUsers();
  form = new FormGroup({
    userName: new FormControl(''),
    moNumber: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    jobType: new FormControl(''),
    status: new FormControl('')
  })

  constructor(private apiService: ApiService, private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");

   

    this._Activatedroute.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("id")) {
        this.mode = "edit";
        this.id = paramMap.get("id");
        this.apiService.getSubUserById(this.id).subscribe((res: SubUsers) => {
          console.log(res);
          this.userData = res;
        },
        (err) => {
          console.log(err);
        })
      } else {
        this.mode = "create";
        this.id = null;
      }
    });
  }

  onSubmit(){
    console.log(this.form.value);
    if (this.mode === "create") {
      this.apiService.saveSubUsers(this.form.value);
    } else {
      this.apiService.updateSubUsers(this.id, this.form.value);
    }
    this.form.reset();
  }

  getJobValue(){
    console.log(this.form.value.jobType)
  }


  getRadioValue(radioValue){
    console.log(radioValue);
  }

}
