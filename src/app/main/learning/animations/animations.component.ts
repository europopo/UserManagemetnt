import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
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
    trigger('flyInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(3000),
      ]),
      transition('* => void', [
        style({transform: 'translateX(100%)'}),
        animate(1000)
      ]),
    ])

  ]
})
export class AnimationsComponent implements OnInit {
  animates: any;
  animatestwo: any;
  constructor() { }

  ngOnInit(): void {
    this.animates = [
      {content: '动画1', state: 'inactive'},
    ];
    this.animatestwo = [
      {content: '动画2', state: 'inactive'},
    ];
  }

  toggleState(animate: any) {
    animate.state = animate.state=='inactive'?'active':'inactive';
  }


}
