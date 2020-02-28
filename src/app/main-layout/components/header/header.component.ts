import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {LoadingServer} from '../../../services/loadingServer.servise';
import * as M from 'src/assets/materialize/js/materialize.min.js';
import {Router} from '@angular/router';
import {HideOrShowService} from '../../../services/hideOrShow.service';
import {animate, keyframes, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('showInputSearch', [
      transition(':enter', [
        animate('2s', keyframes([
          style({
            offset: 0,
            maxWidth: '0px'
          }),
          style({
            offset: 0.1,
            maxWidth: '0px'
          }),
          style({
            offset: 0.8,
            maxWidth: '200px'
          }),
          style({
            offset: 1,
            maxWidth: '200px'
          })
        ]))
      ]),
      transition(':leave', [
        animate('10s', keyframes([
          style({
            offset: 0.5,
            maxWidth: '100px'
          }),
          style({
            offset: 1,
            maxWidth: '0px'
          }),
        ]))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  @Output() setActiveMenu: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() searchActive; // данные которые пришил с родителья для закрытия блока поиска.
  @Input() closeMenu; // данные которые приходят из меню при клике на пункт меню и таким образои закрываем меню
  @ViewChild('dropdownTrigger', {static: false}) dropdownTrigger: ElementRef;
  options;
  menu = false;
  cityNameEntered: string;
  visualDataWeatherCity = [];
  search = false;

  constructor(
    private serviceServer: LoadingServer,
    private router: Router,
    private show: HideOrShowService,
    private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    this.search = this.show.setValueToDisplaySearch();
    this.menu = this.closeMenu; // устанавливаем значение  false и закрываем меню
  }

  menuActive() {
    this.menu = this.closeMenu === false ? true : false;
    this.setActiveMenu.emit(this.menu);
  }

  cityRequest() {
    this.visualDataWeatherCity = [];
    if (!this.cityNameEntered) {
      M.toast({html: 'Пустое поле нельзя отправлять', position: 'top-end'});
    } else {
      this.serviceServer.getDataByCityName(this.cityNameEntered).subscribe(data => {
        this.visualDataWeatherCity.push(data);
        setTimeout(() => {
          this.router.navigate(['/weather/detailOfCity', data.idCity]);
          this.changeDetector.detectChanges();
          const elem = this.dropdownTrigger.nativeElement;
          M.Dropdown.init(elem, this.options);
        });
        this.search = false;
        this.show.giveValueToDisplaySearch(this.search);
        this.cityNameEntered = '';
      }, error => {
        M.toast({html: 'Не правельно ведено имя города', position: 'top-end'});
      });
    }
  }

  searchAc() {
    this.search = true;
    this.show.giveValueToDisplaySearch(this.search);
  }

  saveCity(city) {
    if (localStorage.getItem('city') === null) {
      const newCity = [{
        name: city.name,
        id: city.idCity
      }];
      localStorage.setItem('city', JSON.stringify(newCity));
      M.toast({html: `Город ${city.name} записан в память браузера`, position: 'top-end'});
      return;
    }
    if (localStorage.getItem('city').length > 0) {
      const dataLocalstorage = JSON.parse(localStorage.getItem('city'));
      console.log(dataLocalstorage);
      const status = [];
      dataLocalstorage.forEach(elem => {
        if (elem.id.toString() === city.idCity.toString()) {
          status.push(0);
          return;
        } else {
          status.push(1);
        }
      });
      console.log(status);
      if (status.some(c => c === 0) === true) {
        M.toast({html: `Город ${city.name} уже есть есть в списке`, position: 'top-end'});
      } else {
        const newCity = {
          name: city.name,
          id: city.idCity
        };
        dataLocalstorage.push(newCity);
        console.log(dataLocalstorage);
        M.toast({html: `Город ${city.name} записан в память браузера`, position: 'top-end'});
        localStorage.removeItem('city');
        localStorage.setItem('city', JSON.stringify(dataLocalstorage));
      }
    }
  }

}
