import { Router } from '@angular/router';
import { SubUsers } from './../Models/subUsers';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user-reports',
  templateUrl: './admin-user-reports.page.html',
  styleUrls: ['./admin-user-reports.page.scss'],
})
export class AdminUserReportsPage implements OnInit {
  subUserData: SubUsers = new SubUsers();
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiService.getAllSubUsers().subscribe((res: SubUsers) => {
      this.subUserData = res;
      console.log(this.subUserData);
    })
  }


}
