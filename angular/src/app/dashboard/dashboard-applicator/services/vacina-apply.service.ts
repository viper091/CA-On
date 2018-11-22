import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../../api/api.module';
import { UserModel } from '../../../api/services/user.service';
import { VacinaIn } from '../../../api/services/vacina.service';

@Injectable({
  providedIn: 'root'
})
export class VacinaApplyService {

  constructor(private http:HttpClient) { }

  getVacinas(){
    return this.http.get<VacinaIn[]>(API_BASE_URL + 'applicator/' + 'vacinas');
  }
  getUserByEmail(email:string){
    return this.http.get<UserModel>(API_BASE_URL + 'applicator/' + 'user/' + email);
  }
}
