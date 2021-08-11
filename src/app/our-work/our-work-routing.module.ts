import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurWorkPage } from './our-work.page';

const routes: Routes = [
  {
    path: '',
    component: OurWorkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurWorkPageRoutingModule {}
