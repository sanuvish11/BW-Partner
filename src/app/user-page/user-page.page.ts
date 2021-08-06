import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { Notification } from '../Models/Notification';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.page.html',
  styleUrls: ['./user-page.page.scss'],
})
export class UserPagePage implements OnInit {
  notiData: any[] = [];
  status: string = "Active";
  bidAmount: number;
  notiObj: Notification = new Notification();
  userPageId: string;
  dataValue: any = {
    id:"610a3030fbf0660d74745dbb",
    NAME: "snxsk",
    COST: 50000,
    NEED: "PLUMBER",
    TOTAL_AMOUNT: "10000",
    MOBILE_NUMBER: "8879879",
    ADDRESS: "7HJ",
    STATUS: 2
  }

  dataValueRejected: any = {
    id:"610a3030fbf0660d74745dbb",
    NAME: "snxsk",
    COST: 50000,
    NEED: "PLUMBER",
    TOTAL_AMOUNT: "10000",
    MOBILE_NUMBER: "8879879",
    ADDRESS: "7HJ",
    STATUS: 3
  }
  constructor(private apiService: ApiService, 
    public alertController: AlertController) { }

  ngOnInit() {
    this.getNotifications();
  }

  getNotifications(){
    this.apiService.getUserNotiData()
      .subscribe((res: any) => {
        console.log(res);
        res.forEach((data: any) => {
          this.userPageId = data._id;
        })
        this.notiData = res;
      }, (err => {console.log(err)}))
  }

  
  clickAccpet(id){
    console.log(id);
    let notificationId = '610a3030fbf0660d74745dbb'
    console.log(this.notiData)
    this.notiData.forEach((data: any) => {
      console.log(data);
        data.STATUS = 2
        this.status = "Approved";
        this.notiObj  = data;
        console.log(data);
        console.log(this.notiObj)
    }); 
    this.apiService.updateUserNotiData(id, this.notiObj);
    this.apiService.updateNotificationData(notificationId, this.dataValue).subscribe((res: Notification) => {} ,(err => { console.log(err) }));
  }

  increaseBid(id: string){
    console.log(id);
  }

  clickReject(id){
    console.log(id);
    let notificationId = '610a3030fbf0660d74745dbb'
    console.log(this.notiData)
    this.notiData.forEach((data: any) => {
      console.log(data);
        data.STATUS = 3
        this.status = "Reject";
        this.notiObj  = data;
        console.log(data);
        console.log(this.notiObj)
    }); 
    this.apiService.updateUserNotiData(id, this.notiObj);
    this.apiService.updateNotificationData(notificationId, this.dataValueRejected).subscribe((res: Notification) => {} ,(err => { console.log(err) }));
    // this.apiService.updateNotificationData(id, {STATUS: 3});
  }

}
