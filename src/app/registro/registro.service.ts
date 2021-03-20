import { Injectable } from '@angular/core';
//import { registroS } from './registros.json';
import { Registro } from './registro';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class RegistroService {
  private urlEndPoint: string = 'http://localhost:8080/api/registros';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getRegistros(): Observable<Registro[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Registro[])
    );
  }


  create(registro: Registro) : Observable<Registro> {
    return this.http.post<Registro>(this.urlEndPoint, registro, {headers: this.httpHeaders})
  }

  getregistro(id): Observable<Registro>{
    return this.http.get<Registro>(`${this.urlEndPoint}/${id}`)
  }

  update(registro: Registro): Observable<Registro>{
    return this.http.put<Registro>(`${this.urlEndPoint}/${registro.id}`, registro, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Registro>{
    return this.http.delete<Registro>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}
