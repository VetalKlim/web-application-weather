import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map, tap} from 'rxjs/operators';
import * as moment from 'moment';
import 'moment/locale/ru'; // импрорт локали

@Injectable({providedIn: 'root'})
export class LoadingServer {


  constructor(private http: HttpClient) {
  }

  getLocationRequest(pos): Observable<any> {
    let idCity;
    const http = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.lon}`;
    return this.http.get(`${http}&appid=${environment.openWeatherMap.apiKeyOpenWeather}&lang=ru`)
      .pipe(
        map(value => {
          idCity = value;
          return {
            idCity: idCity.id
          };
        })
      );
  }

  getCitiesNearby(pos): Observable<any> {
    let list;
    const http = `https://api.openweathermap.org/data/2.5/find?lat=${pos.lat}&lon=${pos.lon}`;
    return this.http.get(`${http}&appid=${environment.openWeatherMap.apiKeyOpenWeather}&lang=ru`)
      .pipe(
        map(value => {
          list = value.list;
          const selectCitiesNearby = [];
          list.forEach(elem => {
            selectCitiesNearby.push({
              name: elem.name,
              idCity: elem.id,
              icon: elem.weather[0].icon,
              temp: Math.round(elem.main.temp - 273)
            });
          });
          return selectCitiesNearby;
        })
      );
  }


  getCityWeatherNow(city): Observable<any> {
    const http = 'https://api.openweathermap.org/data/2.5/weather?id=';
    let dataCity;
    return this.http.get
    (`${http}${city.idCity}&appid=${environment.openWeatherMap.apiKeyOpenWeather}&lang=ru`)
      .pipe(
        map(value => {
          dataCity = value;
          return {
            name: dataCity.name,
            idCity: dataCity.id,
            windSpeed: dataCity.wind.speed,
            windDeg: dataCity.wind.deg,
            clouds: dataCity.clouds.all,
            description: dataCity.weather[0].description,
            temp: Math.round(dataCity.main.temp - 273),
            pressure: (0.750063755419211 * dataCity.main.pressure).toFixed(2),
            humidity: dataCity.main.humidity,
            visibility: dataCity.visibility / 1000,
            idWeather: dataCity.weather[0].id,
            icon: dataCity.weather[0].icon,
            lat: dataCity.coord.lat,
            lon: dataCity.coord.lon
          };
        })
      );
  }

  getDataByCityName(city): Observable<any> {
    const http = 'https://api.openweathermap.org/data/2.5/weather?q=';
    let nameCity;
    return this.http.get(`${http}${city}&appid=${environment.openWeatherMap.apiKeyOpenWeather}&lang=ru`)
      .pipe(
        map(value => {
          nameCity = value;
          return {
            name: nameCity.name,
            country: nameCity.sys.country,
            idCity: nameCity.id,
            temp: Math.round(nameCity.main.temp - 273),
            description: nameCity.weather[0].description,
            icon: nameCity.weather[0].icon
          };
        })
      );
  }

  getHourlyForecastCity(city): Observable<any> {
    const http = 'https://api.openweathermap.org/data/2.5/forecast?id=';
    let list = [];
    return this.http.get(`${http}${city.idCity}&appid=${environment.openWeatherMap.apiKeyOpenWeather}&lang=ru`)
      .pipe(
        tap(value => list = value.list),
        map(value => {
          list = value.list.splice(0, 8);
          const data = [];
          list.forEach(elem => {
            data.push({
              data: moment(elem.dt * 1000).format('DD.MM'),
              time: moment(elem.dt * 1000).format('HH:mm'),
              temp: Math.round(elem.main.temp - 273),
              humidity: elem.main.humidity,
              clouds: elem.clouds.all,
              windSpeed: elem.wind.speed,
              description: elem.weather[0].description,
              icon: elem.weather[0].icon
            });
          });
          return data;
        }),
      );
  }

  getFiveDaysWeather(city): Observable<any> {
    let list = [];
    const http = 'https://api.openweathermap.org/data/2.5/forecast?id=';
    return this.http.get(`${http}${city.idCity}&appid=${environment.openWeatherMap.apiKeyOpenWeather}&lang=ru`)
      .pipe(
        map(value => {
          const data = [];
          list = value.list;
          list.forEach(elem => {
            if (moment(elem.dt * 1000).format('HHmm') === '1100') {
              data.push({
                data: moment(elem.dt * 1000).format('D.MM'),
                day: moment(elem.dt * 1000).format('dddd'),
                name: value['city'].name,
                temp: Math.round(elem.main.temp - 273),
                humidity: elem.main.humidity,
                windSpeed: elem.wind.speed,
                windDeg: elem.wind.deg,
                clouds: elem.clouds.all,
                pressure: (0.750063755419211 * elem.main.pressure).toFixed(2),
                idWeather: elem.weather[0].id,
                description: elem.weather[0].description,
                icon: elem.weather[0].icon
              });
            }
          });
          return data;
        })
      );
  }

}
