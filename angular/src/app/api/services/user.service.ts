import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { API_BASE_URL } from '../api.module';
import { finalize, map, tap } from 'rxjs/operators';
import { cacheable } from '../../Tools/rxjs_func';


export interface UserModel {
  id,
  name,
  email,
  password,
  cpf,
  nivel_acesso,
  data_nascimento,
  id_cidade,
  id_estado,
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  logoutFromAll:EventEmitter<boolean> = new EventEmitter();
  constructor(private http: HttpClient) { }
  _cache: Observable<any>;

  getUser(): Observable<UserModel> {
    if (this._cache) {
      return this._cache;
    }
    return this._cache = cacheable<any>(this.http.get<UserModel>(API_BASE_URL + 'user'));
  }
  deleteUser(){
    this.logoutFromAll.emit();
    this._cache=null;
  }

  updateUser(user: UserModel): Observable<any> {
    return this.http.post<any>(API_BASE_URL + 'user', user);
  }
}
