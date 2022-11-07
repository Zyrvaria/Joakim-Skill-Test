//This has mostly been copied from https://developer.softrig.com/wiki/authentication/spa-application
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private _authService: AuthService) {}

  signin() {
    this._authService.startSignin();
  }
  ngOnInit() {}
}
