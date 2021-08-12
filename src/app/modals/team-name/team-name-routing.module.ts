import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamNamePage } from './team-name.page';

const routes: Routes = [
  {
    path: '',
    component: TeamNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamNamePageRoutingModule {}
