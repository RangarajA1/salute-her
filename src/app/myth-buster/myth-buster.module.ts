import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MythBusterPageRoutingModule } from './myth-buster-routing.module';

import { MythBusterPage } from './myth-buster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MythBusterPageRoutingModule
  ],
  declarations: [MythBusterPage]
})
export class MythBusterPageModule {}
