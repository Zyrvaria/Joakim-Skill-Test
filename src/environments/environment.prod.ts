export const environment = {
  production: true,

  base_url: 'https://test.softrig.com/api/',
  authority: 'https://test-login.softrig.com',
  client_id: '684e9957-3f6e-4220-9e5a-303c1f352153',
  redirect_uri: 'https://integration-partner/assets/auth.html',
  post_logout_redirect_uri: 'https://integration-partner/#/login',
  silent_redirect_uri: 'https://integration-partner/assets/silent-renew.html',
  automaticSilentRenew: true,
  response_type: 'code',
  scope: 'openid profile AppFramework',
  filterProtocolClaims: true, // prevents protocol level claims such as nbf, iss, at_hash, and nonce from being extracted from the identity token as profile data
  loadUserInfo: true,
};

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
