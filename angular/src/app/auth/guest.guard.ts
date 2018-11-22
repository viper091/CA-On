import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.check();
  }

  constructor(private loginService:LoginService,
    private router:Router){}

    check() {
      if( this.loginService.isLoggedIn())
        {
          this.router.navigate(['/dashboard']);

          return false;
        }

        return true;
    }
}
