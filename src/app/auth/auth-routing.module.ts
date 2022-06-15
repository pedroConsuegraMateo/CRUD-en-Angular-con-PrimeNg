import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { RegistroComponent } from './components/pages/registro/registro.component';


const rutas: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: LoginComponent},
      { path: 'registro', component: RegistroComponent},
      { path: '**', component: LoginComponent}
    ]
  }

]

@NgModule({

  imports: [
    RouterModule.forChild(rutas)
    
  ],
  exports: [
    
  ]
})
export class AuthRoutingModule { }
