import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { UserManager, Log, MetadataService, User } from 'oidc-client';

const settings: any = {
  authority: environment.authority,
  client_id: environment.client_id,
  redirect_uri: environment.redirect_uri,
  post_logout_redirect_uri: environment.post_logout_redirect_uri,
  response_type: environment.response_type,
  scope: environment.scope,
  filterProtocolClaims: environment.filterProtocolClaims,
  loadUserInfo: environment.loadUserInfo,
  automaticSilentRenew: true,
  silent_redirect_uri: environment.silent_redirect_uri,
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  mgr: UserManager = new UserManager(settings);
  userLoadededEvent: EventEmitter<User> = new EventEmitter<User>();
  //This is throwing an error that it has no initializer and isn't assigned in the constructor, but I don't understand what I'm supposed to do with this
  //currentUser: User;
  loggedIn = false;

  //This is throwing an error that it has no initializer and isn't assigned in the constructor, but I don't understand what I'm supposed to do with this
  //authHeaders: Headers;

  constructor(private http: Http) {}
  //I don't know what I can do for these functions that are in the examples given
  //at https://developer.softrig.com/wiki/authentication/spa-application so I'll leave them like this as I don't know how I could make these
  startSignin(): void {}
  isLoggedInObs(): boolean {
    return false;
  }
  IsAdminUser(): boolean {
    return false;
  }
  getToken() {
    return 'some-auth-token';
  }
}
