import { Pipe, PipeTransform } from '@angular/core';
import { Estado, CityService, Cidade } from './city.service';

@Pipe({
  name: 'filterByState'
})
export class CityPipe implements PipeTransform {

  transform(cidades: Cidade[],EstadoID: string) {
    if(cidades)
    return cidades.filter(cidade => cidade.Estado == EstadoID);
  }

}
