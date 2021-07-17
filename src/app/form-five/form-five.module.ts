import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FormFivePageRoutingModule } from './form-five-routing.module';

import { FormFivePage } from './form-five.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormFivePageRoutingModule
  ],
  declarations: [FormFivePage]
})
export class FormFivePageModule {}
