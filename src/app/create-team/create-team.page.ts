import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TeamNamePage } from '../modals/team-name/team-name.page';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.page.html',
  styleUrls: ['./create-team.page.scss'],
})
export class CreateTeamPage implements OnInit {

  dataReturned: any;

  constructor(public modalController: ModalController) { }

  async openModal() {
    const modal = await this.modalController.create({
      component: TeamNamePage,
      cssClass: 'team-name',
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

  ngOnInit() {
  }

}
