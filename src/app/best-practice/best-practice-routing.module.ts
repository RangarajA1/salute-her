import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BestPracticePage } from './best-practice.page';

const routes: Routes = [
  {
    path: '',
    component: BestPracticePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BestPracticePageRoutingModule {}
