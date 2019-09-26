import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/auth/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  submitLogin() {
    this.authService.loginWithFacebook().subscribe((response) => {
      console.log('submitLogin', response);
      if (response.authResponse) {
        console.log(response.authResponse);
        // this.authService.setUserId(response.authResponse.userID);
        this.authService.getUser(response.authResponse.userID).subscribe((res)=>{
          this.authService.storeUser(res);
        })
        this.router.navigate(['albums']);
      }
      else {
        console.log('User login failed');
      }
    });
  }

}
