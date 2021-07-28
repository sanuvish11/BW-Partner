import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FormFourthPageRoutingModule } from './form-fourth-routing.module';

import { FormFourthPage } from './form-fourth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormFourthPageRoutingModule
  ],
  declarations: [FormFourthPage]
})
export class FormFourthPageModule {}
