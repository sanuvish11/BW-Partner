import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurWorkPageRoutingModule } from './our-work-routing.module';

import { OurWorkPage } from './our-work.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurWorkPageRoutingModule
  ],
  declarations: [OurWorkPage]
})
export class OurWorkPageModule {}
