import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  childvalue: any;
  num = 1;
  child_1 = '事件傳值';
  constructor() { }

  ngOnInit(): void {

  }
  getValue(value: string) {
    this.childvalue = value;
  }
  change(){
    alert(this.childvalue);
  }
}
