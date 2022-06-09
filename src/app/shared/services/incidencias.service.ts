import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

  constructor(private httpClient: HttpClient ) { }
  public getUsuarios(): Observable<Usuario[]> {
    const url = `http://localhost:3000/usuarios`;
    return this.httpClient.get<Usuario[]>(url);
  }
}
