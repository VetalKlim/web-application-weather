// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {Interface} from './interface';

export const environment: Interface = {
  production: false,
  openWeatherMap: {
    apiKeyOpenWeather: '537059efb729dc6cc9e05c0d7943b9c7'
  },
  firebaseConfig: {
    apiKey: 'AIzaSyDwINBraQ_YZoxceSDKUnXf3iKhJsJwo0Y',
    authDomain: 'weather-application-klim.firebaseapp.com',
    databaseURL: 'https://weather-application-klim.firebaseio.com',
    projectId: 'weather-application-klim',
    storageBucket: 'weather-application-klim.appspot.com',
    messagingSenderId: '655303930050',
    appId: '1:655303930050:web:c2930eac28276fae2dcb5b'
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
