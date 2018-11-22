import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostoService, PostoModel } from '../services/posto.service';
import { map } from 'rxjs/operators';
import { CityService, Estado, Cidade } from '../../../Tools/city.service';

@Component({
  selector: 'app-posto',
  templateUrl: './posto.component.html',
  styleUrls: ['./posto.component.css']
})


export class PostoComponent implements OnInit {

  dados : Observable<PostoModel> = null;
  estado : Observable<Estado[]> = null;
  cidade : Observable<Cidade[]> = null;
  dadosModel : PostoModel;
  constructor( private postoService : PostoService,
               private cityService :CityService
              ) { }

  ngOnInit() {
    this.dados = this.postoService.get().pipe(
      map((res) =>{
        this.dadosModel = res;

        this.estado = this.cityService.getEstados().pipe(
          map(x => {
            
            return x.filter(estado => estado.ID == this.dadosModel.id_estado)
          }));
        this.cidade = this.cityService.getCidades().pipe(
          map(x => {
            return x.filter(cidade => cidade.ID == this.dadosModel.id_cidade)
          }));
        
        console.log(res) ;return res; 


        })
    );



  }

}
