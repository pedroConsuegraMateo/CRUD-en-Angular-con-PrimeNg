import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageUsuariosComponent } from './page-usuarios/page-usuarios.component';


const rutas: Routes = [
  {
    path: '',
    children: [
      {path: '',  component: PageUsuariosComponent},
      {path: 'listado',  component: PageUsuariosComponent},
      {path: 'estadisticas',  component: PageUsuariosComponent},
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rutas)
  ],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
