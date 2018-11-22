import { Injectable } from '@angular/core';
import * as api from '../../api/api.module';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Register{
  email:string,
  password:string,
  id_cidade:string,
  id_estado:string,
  data_nascimento:string,
  name:string
}
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }


  doRegister(params:Register) : Observable<Register>{
    return this.http.post<Register>(api.API_BASE_URL + 'register', params);
  }
}
