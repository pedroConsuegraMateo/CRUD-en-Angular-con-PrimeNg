import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuModule} from 'primeng/menu';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {ProgressBarModule} from 'primeng/progressbar';
import {TableModule} from 'primeng/table';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ], exports: [
    MenuModule,
    CardModule,
    ButtonModule,
    ToastModule,
    ProgressBarModule,
    TableModule
  ]
})
export class PrimengModule { }
