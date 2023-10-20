import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePersonajesPageRoutingModule } from './detalle-personajes-routing.module';

import { DetallePersonajesPage } from './detalle-personajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePersonajesPageRoutingModule
  ],
  declarations: [DetallePersonajesPage]
})
export class DetallePersonajesPageModule {}
