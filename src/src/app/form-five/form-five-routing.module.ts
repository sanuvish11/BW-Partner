import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormFivePage } from './form-five.page';

const routes: Routes = [
  {
    path: '',
    component: FormFivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormFivePageRoutingModule {}
