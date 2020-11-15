import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TokenService } from './shared/token.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginGuard implements CanActivate {
  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.tokenService.getAccessToken()
      .pipe(
        map(() => {
          this.router.navigate(['bugs']);
          return false;
        }),
        catchError(() => {
          // console.log("OK We Can nav");
          // this.router.navigate(['auth/login']);
          return of(true);
        })
      );
  }
}
