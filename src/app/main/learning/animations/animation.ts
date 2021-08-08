import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const animations = [
    ///
    trigger('state', [
      state('inactive', style({
        backgroundColor: 'bisque',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: 'black',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active',animate('1000ms ease-in')),
      transition('active => inactive',animate('1000ms ease-out')),
    ]),
    ///
    trigger('flyInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(1000),
      ]),
      transition('* => void', [
        animate('0.8s 0.5s ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ]),
    trigger('flyInOut2', [
        state('in', style({transform: 'transleteX(0)'})),
        transition('void => *', [
            animate(1000, keyframes([
                style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
                style({opacity: 1, transform: 'translateX(15px)', offset: 0.3}),
                style({opacity: 1, transform: 'translateX(0)', offset: 1.0}),
            ])),
        ]),
        transition('* => void', [
            animate(300, keyframes([
                style({opacity: 1, transform: 'translateX(-0)', offset: 0}),
                style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
                style({opacity: 0, transform: 'translateX(100%)', offset: 1.0}),
            ])),
        ]),
    ]),

  ];
