import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowFamiliyDetailsPageRoutingModule } from './show-familiy-details-routing.module';

import { ShowFamiliyDetailsPage } from './show-familiy-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowFamiliyDetailsPageRoutingModule
  ],
  declarations: [ShowFamiliyDetailsPage]
})
export class ShowFamiliyDetailsPageModule {}
