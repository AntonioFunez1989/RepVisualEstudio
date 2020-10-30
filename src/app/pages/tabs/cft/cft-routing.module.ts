import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CFTPage } from './cft.page';

const routes: Routes = [
  {
    path: '',
    component: CFTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CFTPageRoutingModule {}
