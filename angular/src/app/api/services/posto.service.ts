import { Injectable } from '@angular/core';


export interface PostoIn{
  id,
  id_cidade,
  endereco,
}


@Injectable({
  providedIn: 'root'
})
export class PostoService {

  constructor() { }
}
