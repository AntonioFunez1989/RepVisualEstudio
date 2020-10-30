import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DAMDOSPageRoutingModule } from './dam-dos-routing.module';

import { DAMDOSPage } from './dam-dos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DAMDOSPageRoutingModule
  ],
  declarations: [DAMDOSPage]
})
export class DAMDOSPageModule {}
