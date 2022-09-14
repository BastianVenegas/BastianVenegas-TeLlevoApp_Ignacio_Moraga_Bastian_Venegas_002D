import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuienesPageRoutingModule } from './quienes-routing.module';

import { QuienesPage } from './quienes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuienesPageRoutingModule
  ],
  declarations: [QuienesPage]
})
export class QuienesPageModule {}
