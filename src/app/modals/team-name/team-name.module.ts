import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamNamePageRoutingModule } from './team-name-routing.module';

import { TeamNamePage } from './team-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamNamePageRoutingModule
  ],
  declarations: [TeamNamePage]
})
export class TeamNamePageModule {}
