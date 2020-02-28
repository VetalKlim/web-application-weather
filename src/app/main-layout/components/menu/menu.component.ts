import {AfterContentChecked, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import * as M from 'src/assets/materialize/js/materialize.min.js';
import {Subject, Subscriber} from 'rxjs';
import {LoadingServer} from '../../../services/loadingServer.servise';
import {HideOrShowService} from '../../../services/hideOrShow.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterContentChecked {
  @Input() dataCitiesNearby; // данные которые пришил с родителья с городами в радиусе 5км.
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  localStorageCity = [];

  constructor(
    private serviceServer: LoadingServer,
    private show: HideOrShowService) {
  }

  ngOnInit() {
    this.localStorageCity = [];
    this.localStorageCity = JSON.parse(localStorage.getItem('city'));
  }


  closeMenu() {
    if (window.screen.width <= 600) {
      console.log('sdfsdfsdf');
      const close = false;
      this.close.emit(close);
    }
  }

  ngAfterContentChecked(): void {
    this.localStorageCity = JSON.parse(localStorage.getItem('city'));
  }

  deleteCity(id: number) {
    const listCity = JSON.parse(localStorage.getItem('city'));
    const list = listCity.filter(c => c.id !== id);
    localStorage.setItem('city', JSON.stringify(list));
  }
}
