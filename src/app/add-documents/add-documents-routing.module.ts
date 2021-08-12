import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDocumentsPage } from './add-documents.page';

const routes: Routes = [
  {
    path: '',
    component: AddDocumentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDocumentsPageRoutingModule {}
