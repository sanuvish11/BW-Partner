import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewWorkPage } from './new-work.page';

const routes: Routes = [
  {
    path: '',
    component: NewWorkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewWorkPageRoutingModule {}
