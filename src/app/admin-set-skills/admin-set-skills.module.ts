import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AdminSetSkillsPageRoutingModule } from './admin-set-skills-routing.module';

import { AdminSetSkillsPage } from './admin-set-skills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdminSetSkillsPageRoutingModule
  ],
  declarations: [AdminSetSkillsPage]
})
export class AdminSetSkillsPageModule {}
