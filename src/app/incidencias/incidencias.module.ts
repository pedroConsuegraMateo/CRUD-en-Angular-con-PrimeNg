import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageIncidenciasComponent } from './page-incidencias/page-incidencias.component';



@NgModule({
  declarations: [
    PageIncidenciasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageIncidenciasComponent
  ]
})
export class IncidenciasModule { }
