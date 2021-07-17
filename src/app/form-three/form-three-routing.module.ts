import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormThreePage } from './form-three.page';

const routes: Routes = [
  {
    path: '',
    component: FormThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormThreePageRoutingModule {}
