import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageUsuariosComponent } from './page-usuarios/page-usuarios.component';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [
    PageUsuariosComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    PageUsuariosComponent
  ]
})
export class UsuariosModule { }
