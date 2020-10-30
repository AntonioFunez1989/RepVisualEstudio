import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DAMPageRoutingModule } from './dam-routing.module';

import { DAMPage } from './dam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DAMPageRoutingModule
  ],
  declarations: [DAMPage]
})
export class DAMPageModule {}
