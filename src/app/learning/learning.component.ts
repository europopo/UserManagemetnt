import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {
  title: string = '學習目錄';
  classname = true;
  classname2 = true;
  num = 25;
  // style = {'font-size': `${this.num}px`};
  constructor() { }

  ngOnInit(): void {
  }

  changestyle(){
    return {'font-size': `${this.num}px`};
  }

  changenum(val){
    this.num = val;
  }


}
