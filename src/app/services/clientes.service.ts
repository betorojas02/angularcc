import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {


 httpOpstions = {
   headers:  new Headers({
     'Content-Type' : 'aplication/json'
   })
 }

  constructor(private http: HttpClient) { }




    getListComentarios() {

    return    this.http.get(environment.url + 'api/cliente');

  }



}
