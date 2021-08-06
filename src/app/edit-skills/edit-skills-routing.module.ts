import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditSkillsPage } from './edit-skills.page';

const routes: Routes = [
  {
    path: '',
    component: EditSkillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditSkillsPageRoutingModule {}
