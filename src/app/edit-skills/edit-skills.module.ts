import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EditSkillsPageRoutingModule } from './edit-skills-routing.module';

import { EditSkillsPage } from './edit-skills.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    EditSkillsPageRoutingModule
  ],
  declarations: [EditSkillsPage]
})
export class EditSkillsPageModule {}
