import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoadingServer} from '../../../services/loadingServer.servise';
import {ActivatedRoute, Params} from '@angular/router';
import * as M from 'src/assets/materialize/js/materialize.min.js';
import {animationStart} from '../../../animations/animate';

@Component({
  selector: 'app-weather-details-group',
  templateUrl: './weather-details-group.component.html',
  styleUrls: ['./weather-details-group.component.scss'],
  animations: [animationStart]
})
export class WeatherDetailsGroupComponent implements OnInit {
  weatherFiveDays;
  options = {
    fullWidth: true,
    indicators: true,
};
  @ViewChild('carousel', {static: false}) carousel: ElementRef;

  constructor(private  serviceServer: LoadingServer,
              private changeDetector: ChangeDetectorRef,
              private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      const city = {
        idCity: params.id
      };
      this.serviceServer.getFiveDaysWeather(city).subscribe(data => {
        this.weatherFiveDays = data;
        setTimeout(() => {
          this.changeDetector.detectChanges();
          const elm = this.carousel.nativeElement;
          M.Carousel.init(elm, this.options);
        });
      });
    });

  }

}
