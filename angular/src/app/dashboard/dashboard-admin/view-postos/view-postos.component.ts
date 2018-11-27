import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminCentralService } from '../services/admin-central.service';
import { PostoModel } from '../../dashboard-applicator/services/posto.service';
import { Observable } from 'rxjs';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Estado, Cidade, CityService } from 'src/app/Tools/city.service';

@Component({
  selector: 'app-view-postos',
  templateUrl: './view-postos.component.html',
  styleUrls: ['./view-postos.component.css']
})
export class ViewPostosComponent implements OnInit {
  postosData: Observable<PostoModel[]> = this.adminService.ObterTodosPostos();
  cidadesData: Observable<Cidade[]> = this.cityS.getCidades();
  estadosData: Observable<Estado[]> = this.cityS.getEstados();
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    'endereco',
    'id_cidade',
    'id_estado',
  ];
  constructor(private adminService: AdminCentralService, private cityS: CityService) { }
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit() {

    let estados: Estado[];
    let cidades: Cidade[];
    this.cidadesData.subscribe(x => {
      cidades = x;


      this.estadosData.subscribe(x => {
        estados = x;
        this.postosData.pipe(
        ).subscribe(
          data => {

            data.forEach(element => {
              element.id_estado = estados.find(e => e.ID == element.id_estado).Nome;
              element.id_cidade = cidades.find(e => e.ID == element.id_cidade).Nome;
            });

            this.dataSource.data = data
            this.dataSource.sort = this.sort;

          }
        );
      });
    });
  }
    
  
}
