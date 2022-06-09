import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Central } from '../interfaces/central.interface';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class CentralesService {

  constructor(private httpClient: HttpClient ) { }
  public getCentrales(): Observable<Central[]> {
    const url = `http://localhost:3000/centrales`;
    return this.httpClient.get<Central[]>(url);
  }
}
