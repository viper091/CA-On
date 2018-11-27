import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { Observable } from '../../../../../node_modules/rxjs';
import { Cidade, Estado, CityService } from '../../../Tools/city.service';
import { PostoModel } from '../../dashboard-applicator/services/posto.service';
import { AdminCentralService } from '../services/admin-central.service';
import { MyErrorStateMatcher } from '../../../auth/register/register.component';

@Component({
  selector: 'app-make-campanha',
  templateUrl: './make-campanha.component.html',
  styleUrls: ['./make-campanha.component.css']
})
export class MakeCampanhaComponent implements OnInit {

  
  campanhaForm: FormGroup;
  currentEstadoID: string;
  estados: Observable<Estado[]>;
  matcher = new MyErrorStateMatcher();
  errors:Array<string> = [];
  done:Array<string> = [];
  constructor(private cityService: CityService,
              private adminService: AdminCentralService) { }

  ngOnInit() {
    this.currentEstadoID = '2';
    this.estados = this.cityService.getEstados();

    this.campanhaForm = new FormGroup({
 
      'estado_alvo': new FormControl('2', [Validators.required]),
      'titulo': new FormControl('', [Validators.required]),
      'conteudo': new FormControl('', [Validators.required]),

    });

    this.estado_alvo.valueChanges.subscribe(val => {
      this.currentEstadoID = val;
    });
  }
  get estado_alvo() { return this.campanhaForm.get('estado_alvo'); }
  get conteudo() { return this.campanhaForm.get('conteudo'); }
  get titulo() { return this.campanhaForm.get('titulo'); }

  
  onSubmit() {
    let postoParams = this.campanhaForm.value;
    console.log(postoParams);
   // this.done = null;
    //this.errors = null;

    this.adminService.lancar_campanha (postoParams).subscribe(
      res => { 
        this.done=Object.values( res);
        alert('ok');
      },
      errors => {
        console.log(errors.error);
        this.errors=Object.values( errors.error);
  
       }
    );
  }

}
