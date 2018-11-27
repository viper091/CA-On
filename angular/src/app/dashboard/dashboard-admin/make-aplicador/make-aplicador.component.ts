import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Estado, Cidade, CityService } from '../../../Tools/city.service';
import { AdminCentralService } from '../services/admin-central.service';
import { PostoModel } from '../../dashboard-applicator/services/posto.service';
import { MyErrorStateMatcher } from '../../../auth/register/register.component';
import { AplicadorIn } from 'src/app/api/services/aplicador.service';
import { VacinaApplyService } from '../../dashboard-applicator/services/vacina-apply.service';
import { UserModel } from 'src/app/api/services/user.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-make-aplicador',
  templateUrl: './make-aplicador.component.html',
  styleUrls: ['./make-aplicador.component.css']
})
export class MakeAplicadorComponent implements OnInit {
  newAppForm: FormGroup;
  cidades: Observable<Cidade[]>;
  currentEstadoID: string;
  estados: Observable<Estado[]>;
  postosData: Observable<PostoModel[]>;
  matcher = new MyErrorStateMatcher();
  errors:Array<string>;
  done:Array<string>;

  constructor(private cityService: CityService,
              private adminService: AdminCentralService,
              ) { }

  ngOnInit() {
    this.currentEstadoID = '2';
    this.estados = this.cityService.getEstados();
    this.cidades = this.cityService.getCidades();
    this.postosData = this.adminService.ObterPostos({
      id_cidade :102,
      id_estado:2
    })
    this.newAppForm = new FormGroup({
      'app_email': new FormControl('', [
        Validators.required,
        Validators.email,
      ]),

      'posto_estado': new FormControl('', [Validators.required]),
      'posto_cidade': new FormControl('', [Validators.required]),
      'postos': new FormControl('', [Validators.required]),

    });

    this.posto_estado.valueChanges.subscribe(val => {
      this.currentEstadoID = val;
    })

    this.posto_cidade.valueChanges.subscribe(currentCidade => {
      this.postosData = this.adminService.ObterPostos({
        id_cidade :currentCidade,
        id_estado:this.currentEstadoID
      })
    });
  }
  get app_email() { return this.newAppForm.get('app_email'); }
  get posto_estado() { return this.newAppForm.get('posto_estado'); }
  get posto_cidade() { return this.newAppForm.get('posto_cidade'); }
  get postos() { return this.newAppForm.get('postos'); }

  register(user:UserModel){
    let appParams: AplicadorIn = {
      id_posto: this.postos.value,
      id_registro: user.id,
      id: 0,
      endereco: 'none'
    };
    this.done = null;
    this.errors = null;
    this.adminService.AdicionarAplicador(appParams).subscribe(
      res => { 
        this.done=Object.values( res);

      },
      errors => {
        console.log(errors.error);
        this.errors=Object.values( errors.error);
  
       }
    );

  }

  onSubmit() {

  this.adminService.getUserByEmail(this.app_email.value).subscribe(
      data => {
        this.register(data);
      },
      errors => {
        this.app_email.setErrors({
          'not_found': true
        });
      }
    )

    
  }
}
