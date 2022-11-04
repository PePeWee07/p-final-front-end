import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonaRegisterPage } from './persona-register.page';

const routes: Routes = [
  {
    path: '',
    component: PersonaRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonaRegisterPageRoutingModule {}
