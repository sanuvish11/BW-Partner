import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormFourthPage } from './form-fourth.page';

const routes: Routes = [
  {
    path: '',
    component: FormFourthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormFourthPageRoutingModule {}
