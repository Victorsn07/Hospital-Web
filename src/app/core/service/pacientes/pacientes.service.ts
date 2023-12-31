import { Paciente } from './../../model/pacientes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private readonly API = environment.url_api;

  constructor(
    private http: HttpClient
  ) { }

  buscarPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.API}/paciente`);
  };

  apagarPacientes(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}paciente?paciente_ID=${id}`);
  };

  cadastrarPaciente(Paciente): Observable<Paciente[]> {
    return this.http.post<Paciente[]>(`${this.API}/paciente`, Paciente);
  };

  editarPacientes(paciente: Paciente): Observable<Paciente[]> {
    return this.http.put<Paciente[]>(`${this.API}/paciente`, paciente).pipe(take(1));
  };

  filtraPaciente(campoFiltro: string): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.API}/paciente/filtro`, {
      params: {
        filtro: campoFiltro
      }
    }).pipe(take(1));
  }
}
