import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableService } from "../service/table.service";

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {
  title: string = '學習目錄';
  classname = true;
  classname2 = true;

  // style = {'font-size': `${this.num}px`};
  constructor(
    public tableService: TableService,
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  // 滑動條
  minValue = 12;
  maxValue = 40;
  inputValue2 = 15;

  showVal($event: any) {
    console.log($event);
  }

  afterChange($event: number) {
    console.log('stop value: ' + $event);
  }


  changestyle(){
    return {'font-size': `${this.inputValue2}px`};
  }

  clickTable() {
    this.tableService.createTable();
    this.router.navigate(['main/table']);
  }

}
