import { Injectable, Input } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService,UserModel } from '../api/services/user.service';
import { finalize,map } from 'rxjs/operators';
import { HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {

  constructor(private userService:UserService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>|Promise<boolean> |boolean {
    return this.check();
  }

  check() {

  return this.userService.getUser().pipe(map(data => data.nivel_acesso == 2));
    //return this.userService.getUser().pipe(map(data => data.nivel_acesso == 2));
    
  }
}
