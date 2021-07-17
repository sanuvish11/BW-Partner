import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FormThreePageRoutingModule } from './form-three-routing.module';

import { FormThreePage } from './form-three.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    FormThreePageRoutingModule
  ],
  declarations: [FormThreePage]
})
export class FormThreePageModule {}
