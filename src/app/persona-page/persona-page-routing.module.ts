import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonaPagePage } from './persona-page.page';

const routes: Routes = [
  {
    path: '',
    component: PersonaPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonaPagePageRoutingModule {}
