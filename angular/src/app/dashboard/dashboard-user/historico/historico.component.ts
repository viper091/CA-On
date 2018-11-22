import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
// import { HistoricoUserService, historicoIn } from '../services/historico-user.service';
import { Observable } from 'rxjs';
import { MatSort, MatTableDataSource } from '@angular/material';
import { map, startWith } from 'rxjs/operators';
import { HistoricoGetModel, HistoricosService } from '../../../api/services/historicos.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements AfterViewInit {

  constructor(private hService: HistoricosService) { }
  historicoData: Observable<HistoricoGetModel[]>= this.hService.get();
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['vacina', 'aplicador', 'posto', 'created_at'];
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
 
    this.historicoData.pipe(

    ).subscribe(
      data =>  {   
        
        this.dataSource.data =data 
        this.dataSource.sort = this.sort;
        
      }
    )

  }


}
