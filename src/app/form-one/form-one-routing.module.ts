import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormOnePage } from './form-one.page';

const routes: Routes = [
  {
    path: '',
    component: FormOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormOnePageRoutingModule {}
