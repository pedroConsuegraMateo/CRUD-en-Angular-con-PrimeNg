import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuModule} from 'primeng/menu';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {ProgressBarModule} from 'primeng/progressbar';
import {TableModule} from 'primeng/table';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import { RippleModule } from 'primeng/ripple';
import {DialogModule} from 'primeng/dialog';
import {ToolbarModule} from 'primeng/toolbar'
import { InputTextModule } from 'primeng/inputtext';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import {AvatarModule} from 'primeng/avatar';








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
    TableModule,
    ConfirmPopupModule,
    RippleModule,
    DialogModule,
    ToolbarModule,
    CascadeSelectModule,
    DropdownModule,
    ReactiveFormsModule,
    TooltipModule,
    AvatarModule
    
  ]
})
export class PrimengModule { }
