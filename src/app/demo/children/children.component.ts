import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
  @Input() name: string;
  child = '模板變量調用';
  @Output() emit = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.emit.emit(this.name);
  }
  change(val){
    this.emit.emit(val);
  }
}
