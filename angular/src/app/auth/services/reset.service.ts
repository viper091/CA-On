import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../api/api.module';

@Injectable({
  providedIn: 'root'
})
export class ResetService {

  constructor(private http: HttpClient) { }

  sendKey(email){
   return this.http.post(API_BASE_URL + 'password/create', email);
  }
  checkKey(key){
    return this.http.get(API_BASE_URL + 'password/find/'+key);

  }
  reset(data){
    return this.http.post(API_BASE_URL + 'password/reset',data);

  }
}
