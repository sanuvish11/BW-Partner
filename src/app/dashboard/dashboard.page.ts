import { Component, OnInit } from '@angular/core';
import { BwUsers } from '../Models/bwUsers';
// import { BwUsers } from 'src/src/app/Models/bwUsers';
import { ApiService } from '../services/api.service';
import { CommonService } from '../services/common.service';
import { FormsService } from '../services/forms.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  showStatus: string = "Offline"
  usersData: BwUsers = new BwUsers();
  isChecked: boolean = false;
  constructor(private apiService: ApiService, 
    private formService: FormsService,
    private commonService: CommonService) { }

  ngOnInit() {
    this.usersData._id = localStorage.getItem('userId');

    this.getUserById();
    this.getBankDetails();
    this.getFamilyDetails();
   
  }


 
  getBankDetails(){
    this.apiService.getBankDetailsById(localStorage.getItem('userId'))
    .subscribe((res: any) => {
      console.log(res);
      this.commonService.setBankData(res)
    },(err => {console.log(err)}));
  }


  getFamilyDetails(){
    this.apiService.getFamilyDetailsById(localStorage.getItem('userId'))
    .subscribe((res: any) => {
      console.log(res);
    },(err => {console.log(err)}));
  }

  getUserById(){
    this.apiService.getBwUsersById(this.usersData._id).subscribe((res: any) => {
      console.log(res.data)
      localStorage.setItem('father_name', res.data.fatherName);
      localStorage.setItem('father_name', res.data.fatherName);
      localStorage.setItem("core_skills", JSON.stringify(res.data.CORE_SKILLS));
      localStorage.setItem("wor_expe", JSON.stringify(res.data.WORK_EXPERIENCE));
      localStorage.setItem('skills', res.data.SKILLS)
      this.usersData = res.data;
      console.log(this.usersData)
    },(err => console.log(err)))
  }

  updateUserData(){
    this.usersData._id = localStorage.getItem('userId');
    this.formService.updateFormData(localStorage.getItem('userId'), this.usersData)
    .subscribe((data: any) => {
      console.log(data)
    },(err => { console.log(err) }));
  }

  changeStatusValue(values){
    if(values.detail.checked === true){
      this.showStatus = "Online";
      this.usersData.online_user = 1;
      this.updateUserData();
    }
    else{
      this.showStatus = "Offline";
      this.usersData.online_user = 0;
      this.updateUserData();
    }
  }

}
