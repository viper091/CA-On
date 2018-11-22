
import { Injectable, NgModule } from '@angular/core';
import { Observable, timer, Subscription } from 'rxjs';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Meta } from '@angular/platform-browser';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from '../../auth/services/login.service';
import { UserService } from '../services/user.service';

@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {

  sub: Subscription = null;

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const token = this.meta.getTag('name=csrf-token').content;
    let token2 = 'NOT FOUND';
    //if (localStorage.getItem('token')) {


      token2 = 'Bearer ' + localStorage.getItem('token');
  
      
    
    if(this.sub == null && this.authService.isLoggedIn()){
      console.log('timer will start');
      this.sub = timer(1000*10,2000).subscribe(
        data => {
          
            if(this.authService.logoutDone())
            {
              console.log('interceptor logout done');
              this.sub.unsubscribe();
              this.sub = null;

            }
            else if (!this.authService.isLoggedIn() ){
                console.log('error user logout under');
                this.authService.isLoggedIn();
                this.sub.unsubscribe();
                this.sub = null;
                localStorage.removeItem('token');
                this.userService.deleteUser();
                this.router.navigate(['/session-end']);
  
            }else {
                              //console.log('login integrity ' + data);
  
  //                            console.log('login integrity ok');
  
            }
  
        }
    );
    }
  
    const dupReq = req.clone({

      headers: req.headers.set('X-Csrf-Token', token).
        set('Authorization', token2)

    });
    return next.handle(dupReq).
      pipe(
        tap(event => {
          if (event instanceof HttpResponse) {

          }
        }, error => {
          // http response status code

          switch (error.status) {
            case 401:
              if (this.authService.isLoggedIn()) {
                this.userService.deleteUser();

                localStorage.removeItem('token');
                this.authService.isLoggedIn();
                this.router.navigate(['/session-end']);
              }
              break;
            default: break;
          }


        })
      );
  }

  constructor(private meta: Meta,
    private router: Router,
    private authService: LoginService,
    private userService : UserService) {

  }
}


@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
    },
  ],
})


export class InterceptorModule {


}