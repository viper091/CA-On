import { Component, OnInit,AfterViewInit, OnChanges } from '@angular/core';
import { UserService, UserModel } from '../api/services/user.service';
import { Observable, Subscription } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { Router, Event, NavigationEnd, Route, NavigationStart } from '@angular/router';
import { PusherService } from '../notifications/service/pusher.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private pusherService : PusherService,
    private userService: UserService,
    private router: Router) { }
  user: Observable<UserModel>;

  ev: Subscription;
  usersubs: Subscription;
  redirect() {
    this.usersubs = this.user.subscribe(
      data => {
        if (this.router.url === '/dashboard') {
          
          console.log('redirect -> ' + data.nivel_acesso );
          if (data.nivel_acesso === 2)
            this.router.navigate(['dashboard', 'admin']);
          else if (data.nivel_acesso === 1)
            this.router.navigate(['dashboard', 'applicator']);

          else {
            this.router.navigate(['dashboard', 'user']);

          }
        }
      },
      errors => {
        console.error(errors);
      }
    );
  }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.redirect();
    this.ev = this.router.events
      .subscribe((e: Event) => {
        if (e instanceof NavigationEnd) {
          let url = e.urlAfterRedirects || e.url;
          if (url === '/dashboard') {
            this.redirect();
//            this.user.pipe(finalize( () => this.redirect()) );
          }
        }
      },
        errors => {
          console.error(errors);
        });




  }
  OnDestroy() {
    this.usersubs.unsubscribe();
    this.ev.unsubscribe();

  }
}
