import { Component, OnInit } from '@angular/core';
import { AdminCentralService } from '../services/admin-central.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/auth/register/register.component';

@Component({
  selector: 'app-make-vacina',
  templateUrl: './make-vacina.component.html',
  styleUrls: ['./make-vacina.component.css']
})
export class MakeVacinaComponent implements OnInit {
  makeVacinaForm: FormGroup;
  minDate = new Date();
  errors:Array<string>;
  done:Array<string>;
  matcher = new MyErrorStateMatcher();

  constructor(private adminS : AdminCentralService) { }

  ngOnInit() {
  
    this.makeVacinaForm = new FormGroup({
      'tipo': new  FormControl('', [Validators.required]),
      'name': new  FormControl('', [Validators.required]),
      'lote': new  FormControl('', [Validators.required]),
      'data_de_validade': new  FormControl('', [Validators.required]),

    });

  }
  get lote(){ return this.makeVacinaForm.get('lote') }
  get tipo(){ return this.makeVacinaForm.get('tipo')}
  get name(){ return this.makeVacinaForm.get('name')}
  get data_de_validade(){ return this.makeVacinaForm.get('data_de_validade')}
  onSubmit(){
    let vacina = this.makeVacinaForm.value;
    this.adminS.AdicionarVacina(vacina).subscribe(
      res => { 
        this.done=Object.values( res);

      },
      errors => {
        console.log(errors.error);
        this.errors=Object.values( errors.error);
  
       }
      
    
    )
  }

}
