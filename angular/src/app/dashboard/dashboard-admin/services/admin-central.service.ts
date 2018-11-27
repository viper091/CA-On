import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../../node_modules/@angular/common/http';
import { API_BASE_URL } from '../../../api/api.module';
import { PostoModel } from '../../dashboard-applicator/services/posto.service';
import { AplicadorIn } from 'src/app/api/services/aplicador.service';
import { UserModel } from 'src/app/api/services/user.service';

export interface Endereco{
  id_cidade,
  id_estado
};

export interface Vacina{
  lote,
tipo,
name,
data_de_validade,
}
@Injectable({
  providedIn: 'root'
})
export class AdminCentralService {

  constructor(private http : HttpClient) { }


  ObterPostos(endereco : Endereco){
    return this.http.post<PostoModel[]>(API_BASE_URL + 'admin/obter_postos_por_local', endereco);
  }
  AdicionarPosto(posto: PostoModel){
    return this.http.post(API_BASE_URL + 'admin/criar_posto', posto);

  }

  AdicionarAplicador(aplicador : AplicadorIn){
    return this.http.post(API_BASE_URL + 'admin/criar_aplicador', aplicador);

  }

  getUserByEmail(email:string){
    return this.http.get<UserModel>(API_BASE_URL + 'admin/' + 'user/' + email);
  }

  lancar_campanha(campanha){
    return this.http.post(API_BASE_URL+'admin/'+ 'lancar_campanha', campanha);
  }

  AdicionarVacina(vacina:Vacina){
    return this.http.post(API_BASE_URL+'admin/'+ 'criar_vacina', vacina);
  }

  ObterVacinas(){
    return this.http.get<Vacina[]>(API_BASE_URL+'admin/'+ 'vacinas');

  }
  excluir_vacina(id){
    return this.http.get<Vacina[]>(API_BASE_URL+'admin/'+ 'excluir/vacina/'+id);

  }

  ObterTodosPostos(){
    return this.http.get<PostoModel[]>(API_BASE_URL+'admin/'+ 'postos');

  }
  ObterAplicadores(){
    return this.http.get(API_BASE_URL+'admin/'+ 'aplicadores');
  }
}
