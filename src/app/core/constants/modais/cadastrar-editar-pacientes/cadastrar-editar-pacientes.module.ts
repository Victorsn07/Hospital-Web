import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarEditarPacientesComponent } from './cadastrar-editar-pacientes.component';
import { MaterialModule } from 'src/app/core/modules/material.module';



@NgModule({
  declarations: [
    CadastrarEditarPacientesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CadastrarEditarPacientesModule { }
