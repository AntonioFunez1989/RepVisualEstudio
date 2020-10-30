import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  },
  {
    path: 'dam',
    loadChildren: () => import('./dam/dam.module').then( m => m.DAMPageModule)
  },
  {
    path: 'dam-dos',
    loadChildren: () => import('./dam-dos/dam-dos.module').then( m => m.DAMDOSPageModule)
  },
  {
    path: 'cft',
    loadChildren: () => import('./cft/cft.module').then( m => m.CFTPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
