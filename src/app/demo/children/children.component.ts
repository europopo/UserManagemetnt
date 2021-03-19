import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AssignmentService } from 'src/app/assignment.service';


@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
  @Input() name: string;
  child = '模板變量調用';
  assignValue = '';
  assignval = '111';
  @Output() emit = new EventEmitter();
  constructor( public assign: AssignmentService) { }

  ngOnInit(): void {
    this.assign.missionConfirmedSource$.subscribe(val=>{
      this.assignval = val;
    })
    this.emit.emit(this.name);
  }
  change(val){
    this.emit.emit(val);
  }

  show(value){
    this.assign.showMsg$.next(value);
  }

}
