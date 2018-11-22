import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as api from '../api/api.module';

export interface Estado{
  ID:string,
  Nome:string,
  Sigla:string
}

export interface Cidade{
  ID:string,
  Nome:string,
  Estado:string
}
@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http:HttpClient) { }
  getEstados() : Observable<Estado[]> { 
    return this.http.get<Estado[]>(api.API_DEFAULT_URL + 'data/Estados.json');
  }
  getCidades() : Observable<Cidade[]>{
    return this.http.get<Cidade[]>(api.API_DEFAULT_URL + 'data/Cidades.json');

  }
}
