import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminCentralService } from '../services/admin-central.service';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-aplicadores',
  templateUrl: './view-aplicadores.component.html',
  styleUrls: ['./view-aplicadores.component.css']
})
export class ViewAplicadoresComponent implements OnInit {

  aplicadoresData: Observable<any> = this.adminService.ObterAplicadores();

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    'registro',
    'posto',
  ];
  constructor(private adminService: AdminCentralService) { }
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit() {


    this.aplicadoresData.pipe(
    ).subscribe(
      data => {


        this.dataSource.data = data
        this.dataSource.sort = this.sort;
      });
  }
}
