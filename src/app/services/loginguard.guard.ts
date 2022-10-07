import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginguardGuard implements CanActivate {

  constructor(private loginService: LoginService,
    private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.loginService.isLoggedIn()==false) {
        return true;
      }  
      if(this.loginService.getUserRole() == "admin"){
        this.router.navigate(['/admin']);
      } else if (this.loginService.getUserRole() == "normal"){
        this.router.navigate(['/user']);
      }
      return false;
  }
  
}
