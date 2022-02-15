import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BestPracticePageRoutingModule } from './best-practice-routing.module';

import { BestPracticePage } from './best-practice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BestPracticePageRoutingModule
  ],
  declarations: [BestPracticePage]
})
export class BestPracticePageModule {}
