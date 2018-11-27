import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Vacina, AdminCentralService } from '../services/admin-central.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-vacinas',
  templateUrl: './view-vacinas.component.html',
  styleUrls: ['./view-vacinas.component.css']
})
export class ViewVacinasComponent implements OnInit {
  vacinasData: Observable<Vacina[]>= this.adminService.ObterVacinas();
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['vacina', 'lote', 'tipo', 'data_de_validade','excluir'];
  constructor( private adminService: AdminCentralService, public dialog:MatDialog) { }
  @ViewChild(MatSort) sort: MatSort;

  deleteConfirm(element){
    const dialogRef = this.dialog.open(DialogConfirm, {
      width: '250px',
      
        });
        // console.log(this.dataSource.data.indexOf(element));
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed ' + result);
      if(result){
        this.adminService.excluir_vacina(element.id).subscribe(x =>{
     

          
          this.dataSource.data = this.dataSource.data.filter(i => i !== element)
          //console.log('vacina => ' + x)
        });
      }
    });

  }
  ngOnInit() {
  
  
    this.vacinasData.pipe(

      ).subscribe(
        data =>  {   
          
          this.dataSource.data =data 
          this.dataSource.sort = this.sort;
          
        }
      )
  }

}





@Component({
  selector: 'dialog-confirm',
  templateUrl: 'dialog.html',
})
export class DialogConfirm {

  constructor(
    public dialogRef: MatDialogRef<DialogConfirm>){}

  onNoClick(): void {

    this.dialogRef.close();
  }

}