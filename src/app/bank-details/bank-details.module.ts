import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BankDetailsPageRoutingModule } from './bank-details-routing.module';

import { BankDetailsPage } from './bank-details.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    BankDetailsPageRoutingModule
  ],
  declarations: [BankDetailsPage]
})
export class BankDetailsPageModule {}
