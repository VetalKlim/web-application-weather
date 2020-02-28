import {AfterContentChecked, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {LoadingServer} from '../../../services/loadingServer.servise';
import * as M from 'src/assets/materialize/js/materialize.min.js';
import {animationStart} from '../../../animations/animate';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
  animations: [animationStart]
})
export class WeatherDetailsComponent implements OnInit, AfterContentChecked {
  cityInformationWeather = []; // переменная в которой хранится данные по выбранному городу
  timeWeatherForecast;
  options = {
    indicators: false,
    numVisible: 5,
    noWrap: false
  };
  @ViewChild('carousel', {static: false}) carousel: ElementRef;
  arrowDown = true;
  arrowTop = false;

  constructor(private router: ActivatedRoute,
              private changeDetector: ChangeDetectorRef,
              private viewportScroller: ViewportScroller,
              private serviceServer: LoadingServer) {
  }

  ngAfterContentChecked() {
    if (screen.width <= 800) {
      document.body.style.overflow = 'hidden';
      this.options = {
        indicators: true,
        numVisible: 5,
        noWrap: false
      };
    } else {
      document.body.style.overflow = 'visible';
      this.options = {
        numVisible: 5,
        indicators: true,
        noWrap: false
      };
    }
  }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      const city = {
        idCity: params.id
      };
      this.serviceServer.getCityWeatherNow(city).subscribe(data => {
        this.cityInformationWeather = [];
        this.cityInformationWeather.push(data);
        this.serviceServer.getHourlyForecastCity(city).subscribe(timeWeather => {
          this.timeWeatherForecast = timeWeather;
          setTimeout(() => {
            this.changeDetector.detectChanges();
            const elem = this.carousel.nativeElement;
            M.Carousel.init(elem, this.options);
          }, 0);
        });
      });
    });
  }

  scrollBottom() {
    if (navigator.userAgent.search(/Firefox/) > 0) {
      document.body.scrollTop = document.body.scrollHeight - document.body.clientHeight;
    }
    this.viewportScroller.scrollToPosition([10000, 10000]);
    setTimeout(() => {
      this.arrowDown = false;
    }, 200);
    setTimeout(() => {
      this.arrowTop = true;
    }, 500);
  }

  scrollTop() {
    if (navigator.userAgent.search(/Firefox/) > 0) {
      document.body.scrollTop = document.documentElement.scrollTop;
    }
    this.viewportScroller.scrollToPosition([0, 0]);
    this.arrowDown = true;
    this.arrowTop = false;
  }

}
