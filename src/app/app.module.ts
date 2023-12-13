import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './views/custom-layout/custom-layout.module';
import { MaterialModule } from 'src/app/core/modules/material.module'
import { LibVexModule } from './core/modules/lib-vex.module';
import { MedicosModule } from './views/pages/medicos/medicos.module';
import { CadastrarEditarPacientesComponent } from './core/constants/modais/pacientes/cadastrar-editar-pacientes/cadastrar-editar-pacientes.component';
import { CadastrarEditarMedicosComponent } from './core/constants/modais/medicos/cadastrar-editar-medicos/cadastrar-editar-medicos.component';
import { PacientesModule } from './views/pages/pacientes/pacientes.module';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarEditarPacientesComponent,
    CadastrarEditarMedicosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    LibVexModule,
    MedicosModule,
    PacientesModule,

    // Vex
    VexModule,
    CustomLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
