import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Medico } from '../../model/medicos';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  private readonly API = environment.url_api;

  constructor(
    private http: HttpClient
  ) { }

  buscarMedicos(): Observable<Medico[]> {
    return this.http.get<Medico[]>(`${this.API}/medicos`);
  };

  apagarMedico(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/medicos?medico_ID=${id}`);
  };

  cadastrarMedico(Medico): Observable<Medico[]> {
    return this.http.post<Medico[]>(`${this.API}/medicos`, Medico);
  };

  editarMedico(medico: Medico): Observable<Medico[]> {
    return this.http.put<Medico[]>(`${this.API}/medicos`, medico).pipe(take(1));
  }
}
