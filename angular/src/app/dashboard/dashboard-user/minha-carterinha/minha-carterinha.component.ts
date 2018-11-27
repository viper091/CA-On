import { Component, OnInit, ViewChild } from '@angular/core';
import { CarterinhaService, carterinhaIn } from '../services/carterinha.service';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatSort } from '@angular/material';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-minha-carterinha',
  templateUrl: './minha-carterinha.component.html',
  styleUrls: ['./minha-carterinha.component.css']
})
export class MinhaCarterinhaComponent implements OnInit {
    dataC:any[];

  constructor(private carterinhaS:CarterinhaService) { }

  ngOnInit() {
   this.carterinhaS.get().subscribe(

      data => {
        this.dataC = data;

        this.dataC.forEach(element => {
          element.exibir = true;
          if(element.deleted_at ){
            element.exibir = element.historico.length > 0 ? true : false;
          }
        });
        
        // this.keys=  Object.keys(this.dataC);
        console.log(data);
      }
     );

  }


 


  
}
