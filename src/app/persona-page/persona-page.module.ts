import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonaPagePageRoutingModule } from './persona-page-routing.module';

import { PersonaPagePage } from './persona-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonaPagePageRoutingModule
  ],
  declarations: [PersonaPagePage]
})
export class PersonaPagePageModule {}
