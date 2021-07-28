import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-pipestudy',
  templateUrl: './pipestudy.component.html',
  styleUrls: ['./pipestudy.component.css']
})
export class PipestudyComponent implements OnInit {

  constructor() {
    this.reset();
    this.resend();
  }

  ngOnInit(): void {
  }

  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
  toggle = true; // start with true == shortDate
  // format: string = 'shortDate';

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() {this.toggle = !this.toggle;}
  // toggleFormat() {
  //   if(this.format=='shortDate') {
  //     this.format = 'fullDate';
  //   } else this.format = 'shortDate';
  // }
  HEROES = [
    {name: 'superman', canfly: true},
    {name: 'batman', canfly: false},
    {name: 'nero', canfly: true},
  ];
  heroes: any[] = [];
  copeheroes: any[] = [];
  canfly = true;

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    const hero = {name, canfly: this.canfly};
    this.heroes.push(hero); // 而变更检测器会忽略对数组元素的更改
    this.heroes = JSON.parse(JSON.stringify(this.heroes)); //用一个包含新更改过的元素的新数组替换该数组，然后把这个新数组作为输入传给管道
  }
  addcopeHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    const hero = {name, canfly: this.canfly};
    this.copeheroes.push(hero);
  }


  reset() {
    this.heroes = this.HEROES.slice();
    this.copeheroes = this.HEROES.slice();
  }

  // 使用内置的 AsyncPipe 接受一个可观察对象作为输入，并自动订阅输入。如果没有这个管道，你的组件代码就必须订阅这个可观察对象来使用它的值，提取已解析的值、把它们公开进行绑定，并在销毁这段可观察对象时取消订阅，以防止内存泄漏。 AsyncPipe 是一个非纯管道，可以节省组件中的样板代码，以维护订阅，并在数据到达时持续从该可观察对象中提供值。
  message$: Observable<string>;
  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];

  resend() {
    this.message$ = interval(500).pipe(
      map(i => this.messages[i]),
      take(this.messages.length)
    );
  }

}
