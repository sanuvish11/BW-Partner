import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminSetSkillsPage } from './admin-set-skills.page';

const routes: Routes = [
  {
    path: '',
    component: AdminSetSkillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminSetSkillsPageRoutingModule {}
