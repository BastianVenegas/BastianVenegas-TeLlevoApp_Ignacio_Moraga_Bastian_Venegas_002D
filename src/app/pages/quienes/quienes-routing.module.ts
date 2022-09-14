import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuienesPage } from './quienes.page';

const routes: Routes = [
  {
    path: '',
    component: QuienesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuienesPageRoutingModule {}
