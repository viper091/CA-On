import { Injectable } from '@angular/core';
export interface AplicadorIn{
  id,
  id_posto,
  id_registro,
  endereco,
}
@Injectable({
  providedIn: 'root'
})
export class AplicadorService {

  constructor() { }
}
