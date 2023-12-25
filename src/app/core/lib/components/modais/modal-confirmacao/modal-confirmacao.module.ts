import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmacaoComponent } from './modal-confirmacao.component';
import { MaterialModule } from 'src/app/core/modules/material.module';



@NgModule({
  declarations: [
    ModalConfirmacaoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ModalConfirmacaoModule { }
