import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
  name: string = 'hello';
  @Output() emit = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.emit.emit(this.name);
  }
  change(val){
    this.emit.emit(val);
  }
}
