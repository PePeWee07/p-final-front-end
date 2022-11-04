import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonaUpdatePageRoutingModule } from './persona-update-routing.module';

import { PersonaUpdatePage } from './persona-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonaUpdatePageRoutingModule
  ],
  declarations: [PersonaUpdatePage]
})
export class PersonaUpdatePageModule {}
