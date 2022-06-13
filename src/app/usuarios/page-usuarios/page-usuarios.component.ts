import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService, PrimeIcons } from 'primeng/api';
import { Rol, Usuario } from 'src/app/shared/interfaces/usuario.interface';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';

@Component({
  selector: 'app-page-usuarios',
  templateUrl: './page-usuarios.component.html',
  styleUrls: ['./page-usuarios.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class PageUsuariosComponent implements OnInit {
  public listaUsuarios: Usuario[];
  public borrando: boolean;
  public mostrandoDialogoUsuario: boolean;
  public usuario: Usuario;

  public rolesDisponibles: Rol[];

  //Switches mientras dura un proceso (peticiones http)
  public procesoCargaListaUsuarios: boolean;
  public procesoBorrando: boolean;
  public procesoGuardando: boolean;

  constructor(private usuariosService: UsuariosService, private messageService: MessageService, private confirm: ConfirmationService) {
    this.procesoCargaListaUsuarios = false;
    this.procesoBorrando = false;
    this.procesoGuardando = false;
    this.listaUsuarios = [];
    this.borrando = false;
    this.mostrandoDialogoUsuario = false;
    this.usuario = <Usuario>{};
    this.rolesDisponibles = [
      {id: 1, rol: 'administrador'},
      {id: 2, rol: 'usuario'},
      {id: 3, rol: 'visor'}
    ];
   }

  ngOnInit(): void {
    this.cargarDatos();
  }

  public cargarDatos(): void{
    this.usuariosService.getAll().subscribe(
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

  public confirmacionUsuario(usuario: Usuario, event: Event) {
    this.confirm.confirm({
      target: event.target as EventTarget,
      message: `¿Estás seguro de querer eliminar a ${usuario.nombre}?`,
      icon: PrimeIcons.QUESTION,
      acceptLabel: "Aceptar",
      rejectLabel:"Cancelar",
      accept: () => {
        this.eliminarUsuario(usuario);
      },
      reject: () => {
        this.messageService.add({
          severity: "info",
          summary: "Cancelado",
          detail: "Operación cancelada. No se ha borrado nada."
        });
      }
    });
  }

  public eliminarUsuario(usuario: Usuario){
    this.borrando = true;

    this.usuariosService.deleteById(usuario.id).subscribe({
      next: (resp) =>{
        this.messageService.add({
          severity: "success",
          summary: "Eliminado",
          detail: "El usuario ha sido eliminado"
        });
      },
      error: (error) => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: error
        })
      },
      complete: () => {
        this.cargarDatos();
        this.borrando = false;
      }
    });


  

  }

  public mostrarDialogoFormularioUsuario(){
    this.mostrandoDialogoUsuario = true;
    
  }

  public ocultarDialogoFormularioUsuario(){
    this.mostrandoDialogoUsuario = false;
  }

  public guardarUsuario(){
    this.procesoGuardando = true;
    this.usuariosService.add(this.usuario).subscribe({
      next: (resp) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Usuario añadido',
          detail: `Se añadió correctamente el usuario ${resp.nombre}`,
          life : 2000
        })
        console.log("Usuario creado correctamente", resp); //TODO: Cambiar console.log por un toast
        this.procesoGuardando = false;
        this.ocultarDialogoFormularioUsuario();
        this.cargarDatos();
      },
      error: (error) => {
        console.error("Hubo un error al crear el usuario", this.usuario, error);
        this.procesoGuardando = false;
      }
    });
  }
  
  public editarUsuario(usuario: Usuario){
    this.usuario = usuario;
    this.mostrarDialogoFormularioUsuario();
  }

}
