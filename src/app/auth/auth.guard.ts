import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(localStorage.getItem('isLoggedIn') && localStorage.getItem('isLoggedIn') == 'true') {
      console.log('AuthGuard Called, returning True');
      return true;
    } else {
      // return false;
      console.log('AuthGuard called but should nav to login');
      this.router.navigate(['/login']);
      return false;
    }
    
  }
  
}
