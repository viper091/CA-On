import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { VacinaApplyService } from '../services/vacina-apply.service';
import { UserModel } from '../../../api/services/user.service';
import { MatStepper, MatSnackBar } from '@angular/material';
import { VacinaIn } from '../../../api/services/vacina.service';
import { Observable } from 'rxjs';
import { HistoricosService, ApplyHistoricoModel } from '../../../api/services/historicos.service';

@Component({
  selector: 'app-vacina-apply',
  templateUrl: './vacina-apply.component.html',
  styleUrls: ['./vacina-apply.component.css']
})
export class VacinaApplyComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  @ViewChild('stepper') stepper: MatStepper;

  user: UserModel;
  vacinas: Observable<VacinaIn[]>;
  errors: string[];
  constructor(private _formBuilder: FormBuilder,
    private applyService: VacinaApplyService,
    private historicoService: HistoricosService,
    private snackBar: MatSnackBar) { }


  get email() {
    return this.firstFormGroup.get('email');
  }
  get vacina() {
    return this.secondFormGroup.get('vacina');
  }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      email: ['', Validators.email]
    });

    this.secondFormGroup = this._formBuilder.group({
      vacina: ['', Validators.required]
    });
    this.vacinas = this.applyService.getVacinas();
    /*
    this.applyService.getVacinas().subscribe(
      data =>{
        this.vacinas = data;
        console.log(this.vacinas);
      });*/
  }

  onSubmit() {

    let historico: ApplyHistoricoModel = {
      id_vacina: this.vacina.value,
      id_registro: this.user.id,
    }
    this.historicoService.put(historico).subscribe(
      data => {

        console.log(data);
        let snackBarRef = this.snackBar.open('Vacina aplicada com sucesso', '', {
          duration: 2000,
        });

      },
      errors => {
        let snackBarRef = this.snackBar.open('Não foi possivel aplicar a vacina', '', { duration: 2000 });

        console.error(errors);
      }
    );

  }

  onSubmit_CheckEmail() {

    this.applyService.getUserByEmail(this.email.value).subscribe(
      data => {
        this.user = data;
        this.stepper.next();
      },
      errors => {
        this.firstFormGroup.setErrors({
          'not_found': true
        });
      }
    )

  }
}
