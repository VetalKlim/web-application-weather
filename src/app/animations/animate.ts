import {animate, keyframes, query, style, transition, trigger} from '@angular/animations';

export const animationHeader = trigger('animations-header', [
  transition(':enter', [
    query('.text', animate(0, style({opacity: 0, fontSize: 0}))),
    animate('1s', keyframes([
      style({
        maxWidth: '0%',
        offset: 0,
      }),
      style({
        maxWidth: '60%',
        borderBottom: '2px dashed rgb(0, 0, 0, 0.2)',
        offset: 0.6
      }),
      style({
        maxWidth: '50%',
        borderBottom: '2px dashed rgb(0, 0, 0, 0.2)',
        offset: 1,
        opacity: 1
      })
    ])),
    query('.text', animate('0.5s', style({
      opacity: 1,
      fontSize: '26px',
      textAlign: 'left'
    })))
  ])
]);
export const animationImgHeader = trigger('animation-img', [
  transition(':enter', [
    query('img', animate(0, style({opacity: 0, width: '60%'}))),
    animate('2s', keyframes([
      style({
        offset: 1,
      })
    ])),
    query('img', animate('1s', style({opacity: 1}))),
  ])
]);
export const animationBtnHeader = trigger('animation-btn', [
  transition(':enter', [
    query('.btn', animate(0, style({opacity: 0, width: '100%'}))),
    animate('3s', keyframes([
      style({
        opacity: 0,
        offset: 0.6,
        background: '#33495F'
      }),
      style({
        maxWidth: '100%',
        opacity: 1,
        offset: 1,
      })
    ]))
    , query('.btn', animate('1s', style({opacity: 1, width: '100px'}))),
  ])
]);
export const animationMainHeader = trigger('animations-main', [
  transition(':leave', [
    query('.position', animate(0, style({display: 'none'}))),
    animate('1s', keyframes([
      style({
        offset: 0,
        height: 0,
      }),
      style({
        offset: 1,
        height: 0,
        margin: '0 auto',
      })
    ])),
  ]),
]);
export const animationLoadingHeader = trigger('animations-loading', [
  transition(':enter', [
    query('.position-img', animate(0, style({opacity: 0, maxWidth: '100%', height: '0px'}))),
    animate('2.5s', keyframes([
      style({
        offset: 0,
        opacity: 0,
      }),
      style({
        opacity: 0.4,
        offset: 0.4,
      }),
      style({
        opacity: 0.8,
        offset: 0.7,
      }),
      style({
        opacity: 1,
        height: '100vh',
        offset: 1,
      })
    ])),
    query('.position-img', animate('1s', style({opacity: 1}))),
  ])
]);

export const animationLoading = trigger('loading', [
  transition(':enter', [
    animate('1s', keyframes([
      style({
        offset: 0,
        opacity: 0,
      }),
      style({
        opacity: 0.6,
        offset: 0.3,
      }),
      style({
        opacity: 0.8,
        offset: 0.7,
      }),
      style({
        opacity: 1,
        offset: 1,
      })
    ])),
  ])
]);

export const animationStart = trigger('visualAnimation', [
  transition(':enter', [
    animate('1s', keyframes([
      style({
        offset: 0,
        opacity: 0
      }),
      style({
        offset: 0.5,
        opacity: 0.5
      }), style({
        offset: 1,
        opacity: 1
      }),
    ]))
  ])
]);


