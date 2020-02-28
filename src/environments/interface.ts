export class Interface {
  production: boolean;
  openWeatherMap: {
    apiKeyOpenWeather: string
  };
  firebaseConfig: {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
  };

}
