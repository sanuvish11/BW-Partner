import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditFamilyDetailsPageRoutingModule } from './edit-family-details-routing.module';

import { EditFamilyDetailsPage } from './edit-family-details.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    EditFamilyDetailsPageRoutingModule
  ],
  declarations: [EditFamilyDetailsPage]
})
export class EditFamilyDetailsPageModule {}
