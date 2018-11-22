import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../../api/api.module';

export interface PostoModel{
  id,
  endereco,
  id_cidade,
  id_estado
};
@Injectable({
  providedIn: 'root'
})
export class PostoService {

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<PostoModel>(API_BASE_URL + 'applicator/posto');
  }
}
