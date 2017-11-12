// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBruRP2pFrk0dfCE3Su0irHtITdQgXimwk',
    authDomain: 'cpm-app.firebaseapp.com',
    databaseURL: 'https://cpm-app.firebaseio.com',
    projectId: 'cpm-app',
    storageBucket: 'cpm-app.appspot.com',
    messagingSenderId: '779702431809'
  }
};
