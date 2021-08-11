import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewWorkPageRoutingModule } from './new-work-routing.module';

import { NewWorkPage } from './new-work.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewWorkPageRoutingModule
  ],
  declarations: [NewWorkPage]
})
export class NewWorkPageModule {}
