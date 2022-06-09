import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Central } from 'src/app/shared/interfaces/central.interface';
import { CentralesService } from 'src/app/shared/services/centrales.service';

@Component({
  selector: 'app-page-centrales',
  templateUrl: './page-centrales.component.html',
  styleUrls: ['./page-centrales.component.css']
})
export class PageCentralesComponent implements OnInit {
  public centrales: Central[];

  constructor(private centralesService: CentralesService, private messageService: MessageService) {
    this.centrales = [];
   }

  ngOnInit(): void {
    this.cargarDatos();
  }

  public cargarDatos(): void{
    this.centralesService.getCentrales().subscribe(
      {
        next: (resp: Central[]) => {
          this.centrales = resp;
          console.log(this.centrales);
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
}
