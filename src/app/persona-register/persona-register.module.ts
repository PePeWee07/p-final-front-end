import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonaRegisterPageRoutingModule } from './persona-register-routing.module';

import { PersonaRegisterPage } from './persona-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonaRegisterPageRoutingModule
  ],
  declarations: [PersonaRegisterPage]
})
export class PersonaRegisterPageModule {}
