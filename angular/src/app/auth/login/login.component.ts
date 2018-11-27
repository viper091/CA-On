import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoginService } from '../services/login.service'
import { Login } from '../services/login'

import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService
import { Router } from '@angular/router';
import { Observable, timer, interval, Subscription } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { UserService } from '../../api/services/user.service';
import { NotificationsComponent } from 'src/app/notifications/notifications.component';
class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    tt: Observable<number>;
    hide = true;
    loginForm: FormGroup;
    LoginData: Login;
    error: string;
    formSubmitError: string;
    constructor(
        
        private service: LoginService,
        private userService: UserService,
        private ngxService: NgxUiLoaderService,
        private router: Router) {
    }
    logSub: Subscription;

    ngOnInit(): void {

        this.formSubmitError = "";
        this.LoginData = {
            email: '',
            password: ''
        };
        this.loginForm = new FormGroup({

            'email': new FormControl('', [
                Validators.required,
                Validators.email,
            ]),
            'password': new FormControl('', [
                Validators.required
            ]),
        });
    }
    get email() { return this.loginForm.get('email'); }

    get password() { return this.loginForm.get('password'); }


    matcher = new MyErrorStateMatcher();

    loginSucessful() {

    }
    loginUnauthorized() {
        this.formSubmitError = "Email ou senha incorretos";
    }
    onDestroy() {
        console.log('destroy);')
    }
    onSubmit() {
        this.ngxService.start(); // start foreground loading with 'default' id
        this.LoginData = {
            email: this.email.value,
            password: this.password.value
        };
        this.service.doLogin(this.LoginData).subscribe(
            data => {
                console.log(data);
                localStorage.setItem('token', data['token']);
                this.service.logoutStatus = false;
                this.service.new_isLoggedIn.emit(true);
                this.service.isLoggedIn();
                // 1 hour
                this.logSub = timer(1000 * 60 * 60).subscribe(
                    data => {
                        this.service.logout()
                            .subscribe(x => {
                                console.log('tokken removed');
                                localStorage.removeItem('token');
                                this.userService.deleteUser();
                                this.service.isLoggedIn();
                                this.logSub.unsubscribe();
                                this.router.navigate(['/session-end']);


                            });
                    }
                );
                                    
                // 10 seconds
            
       

                this.userService.getUser().subscribe(
                    data => {

                        
                        if (data.nivel_acesso === 2)
                            this.router.navigate(['dashboard', 'admin']);
                        else if (data.nivel_acesso === 1)
                            this.router.navigate(['dashboard', 'applicator']);

                        else {
                            this.router.navigate(['dashboard', 'user']);

                        }
                    }
                );

            },
            error => {
                this.error = error;
                console.log(this.error);
                this.formSubmitError = error.error.error;
                switch (error.status) {
                    case 401:
                        // this.loginUnauthorized();
                        break;

                    default:
                        break;
                }
            }
        );
        this.ngxService.stop();

        // TODO: Use EventEmitter with form value

    }
}
