import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FormTwoPageRoutingModule } from './form-two-routing.module';

import { FormTwoPage } from './form-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormTwoPageRoutingModule
  ],
  declarations: [FormTwoPage]
})
export class FormTwoPageModule {}
