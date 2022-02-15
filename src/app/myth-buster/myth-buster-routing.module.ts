import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MythBusterPage } from './myth-buster.page';

const routes: Routes = [
  {
    path: '',
    component: MythBusterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MythBusterPageRoutingModule {}
