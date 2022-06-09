import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Usuario } from 'src/app/shared/interfaces/usuario.interface';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';

@Component({
  selector: 'app-page-usuarios',
  templateUrl: './page-usuarios.component.html',
  styleUrls: ['./page-usuarios.component.css'],
  providers: [MessageService]
})
export class PageUsuariosComponent implements OnInit {
  public listaUsuarios: Usuario[];

  constructor(private usuariosService: UsuariosService, private messageService: MessageService) {
    this.listaUsuarios = [];
   }

  ngOnInit(): void {
    this.cargarDatos();
  }

  public cargarDatos(): void{
    this.usuariosService.getUsuarios().subscribe(
      {
        next: (resp: Usuario[]) => {
          this.listaUsuarios = resp;
          console.log(this.listaUsuarios);
        },
        error: (error) => {
          this.messageService.add({
            severity: "error",
            summary: "Error",
            detail: "Hubo un error al realizar la consulta de usuarios.",
            life: 5000,
            closable: true

          });
        }
      }
    )
  }

  public eliminarUsuarios(){
    this.messageService.add({
      severity: "success",
      summary: "Prueba",
      detail: "Estamos probando los toasts"
    }
    );
  }

}
