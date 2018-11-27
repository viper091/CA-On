import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { Observable } from '../../../../../node_modules/rxjs';
import { Cidade, Estado, CityService } from '../../../Tools/city.service';
import { PostoModel } from '../../dashboard-applicator/services/posto.service';
import { AdminCentralService } from '../services/admin-central.service';
import { MyErrorStateMatcher } from '../../../auth/register/register.component';

@Component({
  selector: 'app-make-posto',
  templateUrl: './make-posto.component.html',
  styleUrls: ['./make-posto.component.css']
})
export class MakePostoComponent implements OnInit {

  newPostoForm: FormGroup;
  cidades: Observable<Cidade[]>;
  currentEstadoID: string;
  estados: Observable<Estado[]>;
  matcher = new MyErrorStateMatcher();
  errors:Array<string>;
  done:Array<string>;
  constructor(private cityService: CityService,
              private adminService: AdminCentralService) { }

  ngOnInit() {
    this.currentEstadoID = '2';
    this.estados = this.cityService.getEstados();
    this.cidades = this.cityService.getCidades();

    this.newPostoForm = new FormGroup({
 
      'posto_estado': new FormControl('', [Validators.required]),
      'posto_cidade': new FormControl('', [Validators.required]),
      'posto_endereco': new FormControl('', [Validators.required]),

    });

    this.posto_estado.valueChanges.subscribe(val => {
      this.currentEstadoID = val;
    });
  }
  get posto_estado() { return this.newPostoForm.get('posto_estado'); }
  get posto_cidade() { return this.newPostoForm.get('posto_cidade'); }
  get posto_endereco() { return this.newPostoForm.get('posto_endereco'); }

  
  onSubmit() {
    let postoParams: PostoModel = {
      endereco: this.posto_endereco.value,
      id_cidade: this.posto_cidade.value,
      id_estado: this.posto_estado.value,
      id:0
    };
    this.done = null;
    this.errors = null;
    this.adminService.AdicionarPosto(postoParams).subscribe(
      res => { 
        this.done=Object.values( res);

      },
      errors => {
        console.log(errors.error);
        this.errors=Object.values( errors.error);
  
       }
    );
  }


}
