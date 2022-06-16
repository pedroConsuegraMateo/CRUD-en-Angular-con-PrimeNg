import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor (private authService: AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
      if (this.authService.usuarioActivo.id){
        console.log('CanActivate: Te dejo ',);
        return true;
      } else {
        console.log('CanActivate: Te Bloqueo ',);
        return false;
      }
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      if (this.authService.usuarioActivo.id){
        console.log('CanLoad: Te dejo ',);
        return true;
      } else {
        console.log('CanLoad: Te Bloqueo ',);
        return false;
    }
  }
}
