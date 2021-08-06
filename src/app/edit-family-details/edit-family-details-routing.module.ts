import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditFamilyDetailsPage } from './edit-family-details.page';

const routes: Routes = [
  {
    path: '',
    component: EditFamilyDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditFamilyDetailsPageRoutingModule {}
