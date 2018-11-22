import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatStepper, MatSnackBar } from '@angular/material';
import { ResetService } from '../services/reset.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  @ViewChild('stepper') stepper: MatStepper;

  constructor(private _formBuilder: FormBuilder,
    private resetService: ResetService,
    private snackBar: MatSnackBar) { }

  get email() {
    return this.firstFormGroup.get('email');
  }
  get key() {
    return this.secondFormGroup.get('key');

  }
  get password() {
    return this.thirdFormGroup.get('password');

  }

  //password_confirmation

  get password_confirmation() {
    return this.thirdFormGroup.get('password_confirmation');

  }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      email: ['', Validators.email]
    });

    this.secondFormGroup = this._formBuilder.group({
      key: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required]
    });
  }
  onSubmit_Email() {
    let params = {
      'email': this.email.value
    };
    this.resetService.sendKey(params).subscribe(
      data => {
        // console.log(data);
        this.stepper.next();

      },
      errors => {
        // console.error(errors);
        this.email.setErrors({
          not_exist:true
        })
      }
    );
  }
  onSubmit_CheckKey() {

    this.resetService.checkKey(this.key.value).subscribe(

      data => {
        this.stepper.next();
        console.log(data);
      },
      errors => {
        this.key.setErrors(

          {
            key: true
          }
        )
      }
    );
  }

  onSubmit() {

    let resetParams = {
      email:this.email.value,
      password:this.password.value,
      password_confirmation:this.password_confirmation.value,
      token:this.key.value

    }
    this.resetService.reset(resetParams).subscribe(

      data => {

        let snackBarRef = this.snackBar.open('Senha alterada com sucesso', '', {});
        console.log(data);
      },
      error=>{

        console.error(error);
      }

      
    )

  }
}
