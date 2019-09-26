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
      if (response.authResponse) {
        this.authService.getUser(response.authResponse.userID).subscribe((res)=>{
          this.authService.storeUser(res);
        });
        this.router.navigate(['albums']);
      }
      else {
      }
    });
  }

}
