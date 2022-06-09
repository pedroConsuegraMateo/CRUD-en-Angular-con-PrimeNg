import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient: HttpClient ) { }
  
  public getAll(): Observable<Usuario[]> {
    const url = `http://localhost:3000/usuarios`;
    return this.httpClient.get<Usuario[]>(url);
  }

  public deleteById(id: number): Observable<Usuario>{
    const url = `http://localhost:3000/usuarios/${id}`;
    return this.httpClient.delete<Usuario>(url);
  }

  public deleteByUsuario(usuario: Usuario): Observable<Usuario>{
    const url = `http://localhost:3000/usuarios/${usuario.id}`;
    return this.httpClient.delete<Usuario>(url);
  }
}
