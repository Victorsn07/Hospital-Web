import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarEditarMedicosComponent } from './cadastrar-editar-medicos.component';
import { MaterialModule } from 'src/app/core/modules/material.module';



@NgModule({
  declarations: [
    CadastrarEditarMedicosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CadastrarEditarMedicosModule { }
