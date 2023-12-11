import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomLayoutRoutingModule } from './custom-layout-routing.module';
import { CustomLayoutComponent } from './custom-layout.component';


@NgModule({
  declarations: [
    CustomLayoutComponent
  ],
  imports: [
    CommonModule,
    CustomLayoutRoutingModule
  ]
})
export class CustomLayoutModule { }
