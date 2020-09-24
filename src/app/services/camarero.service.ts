import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CamareroService {

  httpOpstions = {
    headers:  new HttpHeaders({
      'Content-Type' : 'aplication/json'
    })
  };
  constructor(private http: HttpClient) { }




  listarCamererosMes (mesnumero) {

    // const headers = new HttpHeaders().append(   'Content-Type' , 'aplication/json');
    // const params = new HttpParams().append('mes', mesnumero );

    return this.http.post(environment.url + 'api/camarero/listarVentas',{mes: mesnumero});
  }
}
