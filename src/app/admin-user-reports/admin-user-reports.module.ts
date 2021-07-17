import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminUserReportsPageRoutingModule } from './admin-user-reports-routing.module';

import { AdminUserReportsPage } from './admin-user-reports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminUserReportsPageRoutingModule
  ],
  declarations: [AdminUserReportsPage]
})
export class AdminUserReportsPageModule {}
