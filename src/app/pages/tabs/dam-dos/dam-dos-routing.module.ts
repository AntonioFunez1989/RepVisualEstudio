import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DAMDOSPage } from './dam-dos.page';

const routes: Routes = [
  {
    path: '',
    component: DAMDOSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DAMDOSPageRoutingModule {}
