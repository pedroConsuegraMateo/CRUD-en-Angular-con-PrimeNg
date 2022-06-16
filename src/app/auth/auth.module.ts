import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/pages/login/login.component';
import { RegistroComponent } from './components/pages/registro/registro.component';
import { AuthRoutingModule } from './auth-routing.module';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimengModule,
    FormsModule
  ]
})
export class AuthModule { }
