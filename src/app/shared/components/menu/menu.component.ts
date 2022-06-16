import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { Usuario } from '../../interfaces/usuario.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];
  constructor(private _router: Router, private _authService: AuthService) {
    this.items = [
      
      {label: 'Usuarios', icon: PrimeIcons.USER   , routerLink: 'usuarios'},
      {label: 'Centrales', icon: PrimeIcons.BUILDING  , routerLink: 'centrales'},
      {label: 'Incidencias', icon: PrimeIcons.FLAG, routerLink: 'incidencias'},
      {separator: true},
      {label: 'Cerrar Sesión', icon: 'pi pi-fw pi-power-off', command: () => this.logout()}
    ];
   }

  ngOnInit(): void {
    
  }

  get usuarioActivo(){
    return this._authService.usuarioActivo;
  }

  public logout(){
    this._authService.logout();
    this._router.navigate(['/auth/login']);
  }

}
