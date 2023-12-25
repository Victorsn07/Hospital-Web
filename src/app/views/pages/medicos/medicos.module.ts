import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicosRoutingModule } from './medicos-routing.module';
import { MedicosComponent } from './medicos.component';
import { LibVexModule } from "../../../core/modules/lib-vex.module";
import { MaterialModule } from 'src/app/core/modules/material.module';


@NgModule({
    declarations: [
        MedicosComponent
    ],
    imports: [
        CommonModule,
        MedicosRoutingModule,
        LibVexModule,
        MaterialModule,
    ]
})
export class MedicosModule { }
