import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonaUpdatePage } from './persona-update.page';

const routes: Routes = [
  {
    path: '',
    component: PersonaUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonaUpdatePageRoutingModule {}
