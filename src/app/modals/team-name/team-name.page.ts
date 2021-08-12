import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-team-name',
  templateUrl: './team-name.page.html',
  styleUrls: ['./team-name.page.scss'],
})
export class TeamNamePage implements OnInit {

  modalTitle: string;
  modelId: number;

  constructor(private modalController: ModalController, private navParams: NavParams) { }

  ngOnInit() {

    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
