import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminUserReportsPage } from './admin-user-reports.page';

const routes: Routes = [
  {
    path: '',
    component: AdminUserReportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminUserReportsPageRoutingModule {}
