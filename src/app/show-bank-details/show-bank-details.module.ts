import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowBankDetailsPageRoutingModule } from './show-bank-details-routing.module';

import { ShowBankDetailsPage } from './show-bank-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowBankDetailsPageRoutingModule
  ],
  declarations: [ShowBankDetailsPage]
})
export class ShowBankDetailsPageModule {}
