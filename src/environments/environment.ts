// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

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
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
