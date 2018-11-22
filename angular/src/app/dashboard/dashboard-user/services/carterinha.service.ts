import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../../api/api.module';
import { VacinaIn } from '../../../api/services/vacina.service';


export interface carterinhaIn{
    vacina:VacinaIn[];
  


}

@Injectable({
  providedIn: 'root'
})
export class CarterinhaService {

  constructor(private http:HttpClient) { }

  vacinas(){
    return this.http.get<string[]>(API_BASE_URL + 'vacinas');

  }
  get(){

    return this.http.get<any[]>(API_BASE_URL + 'carterinha');
  }
}
