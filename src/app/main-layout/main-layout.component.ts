import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoadingServer} from '../services/loadingServer.servise';
import {Router} from '@angular/router';
import {HideOrShowService} from '../services/hideOrShow.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  weatherIsNear;
  menu = false;


  constructor(private serverService: LoadingServer,
              private show: HideOrShowService,
              private router: Router) {
  }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.success.bind(this), this.errorHandler.bind(this));
    }
  }

  success(position) {
    const pos = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    };
    this.serverService.getLocationRequest(pos).subscribe(data => {
      this.router.navigate(['/weather/detailOfCity', data.idCity]);
      this.serverService.getCitiesNearby(pos).subscribe(weatherIsNear => {
        this.weatherIsNear = weatherIsNear;
      });
    });
  }

  errorHandler(positionError) {
    if (positionError.code === 1) {
      alert('Вы отклонили запрос на определения местоположения');
      const weatherIsNear = {idCity: 2643743};
      this.serverService.getCityWeatherNow(weatherIsNear).subscribe(data => {
        this.serverService.getCitiesNearby({lat: data.lat, lon: data.lon}).subscribe(city => {
          this.weatherIsNear = city;
          this.router.navigate(['/weather/detailOfCity', data.idCity]);
        });
      });
    }
  }

  showMenu(menu: boolean) {
    this.menu = menu;
  }

  search() {
    const searchActive = false;
    this.show.giveValueToDisplaySearch(searchActive);
  }
}
