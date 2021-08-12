import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDocumentsPageRoutingModule } from './add-documents-routing.module';

import { AddDocumentsPage } from './add-documents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDocumentsPageRoutingModule
  ],
  declarations: [AddDocumentsPage]
})
export class AddDocumentsPageModule {}
