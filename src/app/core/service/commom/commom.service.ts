import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommomService {

  constructor(public http: HttpClient) { }

  buscarViaCep(cep: string): Observable<any> {
    return this.http.get<any>(`http://viacep.com.br/ws/${cep}/json`);
  }
}
