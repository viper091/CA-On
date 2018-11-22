import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {map, finalize} from 'rxjs/operators';
import { LoginService } from '../services/login.service';
import { UserService } from '../../api/services/user.service';
import { PusherService } from 'src/app/notifications/service/pusher.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {


  constructor(
    private loginService: LoginService,
    private userService : UserService,
    private pusherService: PusherService) { }
  loginObs:Subscription;
  logoutMsg='';
  ngOnInit() {
    this.loginObs = this.loginService.logout()
    .pipe(finalize(() => {
        localStorage.removeItem('token');

        this.loginService.isLoggedIn();

        this.loginService.logoutStatus = true;
    } )).
  
    subscribe(

      data => {
        console.log('logout ok');
        this.logoutMsg = data['message'];
        this.userService.deleteUser();
        this.pusherService.close();
  //      localStorage.removeItem('token'); 
 //       this.loginService.isLoggedIn();

        },
      errors => {
        this.logoutMsg = errors['error']['message'];
  //      localStorage.removeItem('token');
   //     this.loginService.isLoggedIn();


//        console.error('logout error: ' + errors);
      },
      function(){

      }
      
    );


  }
  ngOnDestroy(){

    this.loginObs.unsubscribe();

  }


}
