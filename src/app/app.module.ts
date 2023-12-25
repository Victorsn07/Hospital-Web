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
import { PacientesModule } from './views/pages/pacientes/pacientes.module';
import { CadastrarEditarMedicosModule } from './core/lib/components/modais/cadastrar-editar-medicos/cadastrar-editar-medicos.module';
import { CadastrarEditarPacientesModule } from './core/lib/components/modais/cadastrar-editar-pacientes/cadastrar-editar-pacientes.module';

@NgModule({
  declarations: [
    AppComponent,
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
    CadastrarEditarPacientesModule,
    CadastrarEditarMedicosModule,

    // Vex
    VexModule,
    CustomLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
