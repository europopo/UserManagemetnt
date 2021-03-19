import { Component, OnInit } from '@angular/core';
import { AssignmentService } from 'src/app/assignment.service';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  num = 1;
  child_1 = '事件傳值';
  showmsg = '';
  constructor(public assign: AssignmentService) { }

  ngOnInit(): void {
    this.assign.showMsg$.subscribe(msg =>this.showmsg = msg);
  }
  getValue(value: string) {
    this.child_1 = value;
  }

  assignval(val) {
    this.assign.missionConfirmedSource$.next(val);
  }

}
