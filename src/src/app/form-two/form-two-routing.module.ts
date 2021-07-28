import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormTwoPage } from './form-two.page';

const routes: Routes = [
  {
    path: '',
    component: FormTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormTwoPageRoutingModule {}
