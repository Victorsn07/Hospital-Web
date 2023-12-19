import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { PacientesComponent } from './pacientes.component';
import { LibVexModule } from 'src/app/core/modules/lib-vex.module';
import { MaterialModule } from 'src/app/core/modules/material.module';


@NgModule({
  declarations: [
    PacientesComponent
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    LibVexModule,
    MaterialModule
  ]
})
export class PacientesModule { }
