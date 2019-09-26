import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService,
              public router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.authService.getLoginStatus().pipe(map(response => {
      if(response.status === 'connected'){
        return true;
      }
      else{
        this.router.navigate(['login']);
        return false;
      }
    }));
  }
}
