import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AdminCreateUserPageRoutingModule } from './admin-create-user-routing.module';

import { AdminCreateUserPage } from './admin-create-user.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    AdminCreateUserPageRoutingModule
  ],
  declarations: [AdminCreateUserPage]
})
export class AdminCreateUserPageModule {}
