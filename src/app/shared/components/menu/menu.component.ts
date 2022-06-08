import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];
  constructor() {
    this.items = [
      {label: 'Usuarios', icon: PrimeIcons.USER   , routerLink: 'usuarios'},
      {label: 'Centrales', icon: PrimeIcons.BUILDING  , routerLink: 'centrales'},
      {label: 'Incidencias', icon: PrimeIcons.FLAG, routerLink: 'incidencias'},
      {separator: true},
      {label: 'Cerrar Sesión', icon: 'pi pi-fw pi-power-off'}
    ];
   }

  ngOnInit(): void {
    
  }

}
