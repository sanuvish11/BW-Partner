import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowBankDetailsPage } from './show-bank-details.page';

const routes: Routes = [
  {
    path: '',
    component: ShowBankDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowBankDetailsPageRoutingModule {}
