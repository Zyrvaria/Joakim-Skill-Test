//This is taken entirely from https://developer.softrig.com/wiki/authentication/spa-application
import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private idpsService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isLoggedIn = this.idpsService.isLoggedInObs();
    isLoggedIn.subscribe((loggedin) => {
      if (!loggedin) {
        this.router.navigate(['/login'], {
          queryParams: { returnUrl: state.url },
        });
      }
      if (!this.idpsService.IsAdminUser()) {
        this.router.navigate(['/unAuthorized'], {
          queryParams: { returnUrl: state.url },
        });
      }
    });

    return isLoggedIn;
  }
}
