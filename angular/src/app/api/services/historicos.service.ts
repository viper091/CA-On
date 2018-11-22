import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../api.module';
import { VacinaIn } from './vacina.service';
import { PostoIn } from './posto.service';
import { AplicadorIn } from './aplicador.service';

export interface ApplyHistoricoModel{
  id_registro,
//  id_aplicador,
  id_vacina
}

export interface HistoricoGetModel{
  vacina:VacinaIn,
  posto:PostoIn,
  aplicador:AplicadorIn
}


@Injectable({
  providedIn: 'root'
})
export class HistoricosService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<HistoricoGetModel[]>(API_BASE_URL + 'historico');
  }
  put(historico:ApplyHistoricoModel){
    return this.http.post(API_BASE_URL + 'applicator/historico',historico);
  }
}
