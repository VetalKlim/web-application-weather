import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {animationBtnHeader, animationHeader, animationImgHeader, animationLoadingHeader, animationMainHeader} from '../animations/animate';

@Component({
  selector: 'app-initial-layout',
  templateUrl: './initial-layout.component.html',
  styleUrls: ['./initial-layout.component.scss'],
  animations: [
    animationHeader,
    animationImgHeader,
    animationBtnHeader,
    animationMainHeader,
    animationLoadingHeader
  ]
})
export class InitialLayoutComponent implements OnInit, AfterContentChecked {
  timer = 14;

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  ngAfterContentChecked(): void {
    const timer = setTimeout(() => {
      this.timer--;
    }, 800);
    if (this.timer === 0) {
      this.mainClick();
      clearTimeout(timer);
    }
  }

  mainClick() {
    this.router.navigate(['/weather']);
  }
}
