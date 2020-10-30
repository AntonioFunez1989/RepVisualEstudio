import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CFTPageRoutingModule } from './cft-routing.module';

import { CFTPage } from './cft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CFTPageRoutingModule
  ],
  declarations: [CFTPage]
})
export class CFTPageModule {}
