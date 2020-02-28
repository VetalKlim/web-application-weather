import { Component, OnInit } from '@angular/core';
import {animationLoading} from '../../animations/animate';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [animationLoading]
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
