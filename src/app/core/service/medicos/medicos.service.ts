import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Medicos } from '../../model/medicos';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  // private readonly API = environment.url_api;

  constructor(
    private http: HttpClient
  ) { }

  buscarMedicos(): Observable<Medicos[]> {
    return this.http.get<Medicos[]>('http://localhost:3001/medicos/todos')
   }
}
