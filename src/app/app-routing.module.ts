import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCentralesComponent } from './centrales/page-centrales/page-centrales.component';
import { PageIncidenciasComponent } from './incidencias/page-incidencias/page-incidencias.component';
import { PageUsuariosComponent } from './usuarios/page-usuarios/page-usuarios.component';

const routes: Routes = [
  {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
  {path: 'auth',loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)},

  {path: "incidencias", component: PageIncidenciasComponent},
  {path: "centrales", component: PageCentralesComponent},

  {path: "**", redirectTo: ""}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
