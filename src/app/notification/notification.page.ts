import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Notification } from '../Models/Notification';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  notiData: any[] = [];
  status: string = "Active";
  // status = 1/ Active
  // status = 2/ Approved
  // status = 3/ reject
  bidAmount: number;
  notiObj: Notification = new Notification();
  constructor(private apiService: ApiService, 
    public alertController: AlertController) { }

  ngOnInit() {
    this.getNotifications();
  }

  getNotifications(){
    this.apiService.getAllNotifications().subscribe((res: any) => {
      console.log(res);
      this.notiData = res;
    },(err => {console.log(err)}));
  }

  async presentAlert(id, userAmount) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Increase Bid amount!',
      inputs: [
        {
          name: 'Old Value',
          type: 'text',
          value: userAmount,
          placeholder: 'Placeholder 1'
        },
        {
          name: 'new_bid_amount',
          type: 'text',
          placeholder: 'Placeholder 2'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok');
            console.log(data);
            // this.bidAmount = parseInt(userAmount) + parseInt(data.new_bid_amount);
            this.bidAmount = data.new_bid_amount;
            console.log(data.new_bid_amount);
            console.log(this.bidAmount);
            console.log(userAmount);

            this.apiService.saveUserNotification({
                  "NAME": "hello",
                   "NEED": "plu",
                   "COST": userAmount,
                   "TOTAL_AMOUNT": this.bidAmount,
                   "MOBILE_NUMBER": 12345678,
                   "ADDRESS": "TT",
                   "STATUS": 1
           });
            this.notiData.forEach((res: Notification) => {
              console.log(res);
              res.NAME = "Ahmad"
              res.TOTAL_AMOUNT = this.bidAmount.toString();
              console.log(res);
              this.apiService.updateNotificationData(id, res)
              .subscribe((res: Notification) => {
                console.log(res)
                if(res){
                  this.getNotifications();
                }
              } ,(err => { console.log(err) }));
            })
          }
        }
      ]
    });

    await alert.present();
  }

  clickAccpet(id){
    console.log(id);
    this.notiData.forEach((data: any) => {
      if(data._id === id){
        data.STATUS = 2
        this.notiObj = data;
        this.status = "Approved";
        console.log(this.notiObj)
        this.apiService.updateNotificationData(id, this.notiObj)
              .subscribe((res: Notification) => {} ,(err => { console.log(err) }));
      }
    }); 
  }

  increaseBid(id: string){
    console.log(id);
  }

  clickReject(id){
    console.log(id);
    this.notiData.forEach((data: any) => {
      if(data._id === id){
        data.STATUS = 3
        this.notiObj = data;
        this.status = "Rejected";
        console.log(this.notiObj)
        this.apiService.updateNotificationData(id, this.notiObj)
              .subscribe((res: Notification) => {} ,(err => { console.log(err) }));
      }
    })
    // this.apiService.updateNotificationData(id, {STATUS: 3});
  }

}
