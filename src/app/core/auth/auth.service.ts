import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {FacebookService, InitParams} from 'ngx-facebook';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthService {

  private userID;

  constructor(public router: Router,
              private fb: FacebookService) {
  }

  initFacebookSdk() {
    let initParams: InitParams = {
      appId: '421386308803308',
      xfbml: true,
      version: 'v4.0'
    };

    this.fb.init(initParams);
  }

  loginWithFacebook(): Observable<any> {
    return from(this.fb.login());
  }


  getLoginStatus(): Observable<any> {
    return from(this.fb.getLoginStatus());
  }

  getUser(userId:string): Observable<any> {
    return from(this.fb.api(`/${userId}`));
  }

  storeUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  retrieveUser() {
    return localStorage.getItem('user');
  }

}
