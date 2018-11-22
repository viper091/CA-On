import { Injectable } from '@angular/core';



export interface VacinaIn{
  id,
  lote,
  tipo,
  name,
  data_de_validade,
  created_at,
}

@Injectable({
  providedIn: 'root'
})
export class VacinaService {

  constructor() { }
}
