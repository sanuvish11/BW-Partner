import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminCreateUserPage } from './admin-create-user.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCreateUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCreateUserPageRoutingModule {}
