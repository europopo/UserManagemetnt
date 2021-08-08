import { Component, OnInit } from '@angular/core';
import { animations } from "./animation";
@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: animations,
})
export class AnimationsComponent implements OnInit {
  animates: any;
  show: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.animates = {
      animateOne: {content: '动画1', state: 'inactive'},
      animateTwo: {content: '动画2', state: 'visible'},
    }

  }

  toggleState(animate: any) {
    animate.state = animate.state=='inactive'?'active':'inactive';
  }

  animationStarted(event: AnimationEvent) {
    console.warn('Aanimation started: ', event);
  }

  animationDone(event: AnimationEvent) {
    console.warn('Animation done: ', event);
  }


}
