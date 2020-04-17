import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const dominio = environment.apiUrl;
const httpHeader = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(private http: HttpClient) { }

  saveFormulario(datos): Observable<any> {
    let url = dominio + '/formulario';
    return this.http.post(url, datos, httpHeader);
  }

  getFormularios(): Observable<any> {
    let url = dominio + '/formulario';
    return this.http.get(url, httpHeader);
  }
}
