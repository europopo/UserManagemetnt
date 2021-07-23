import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  missionConfirmedSource$ = new Subject<string>();
  showMsg$ = new Subject<string>();
  assvalue = '';
  constructor() { }

  setValue(val) {
    this.assvalue = val;
  }
  getValue() {
    return this.assvalue;
  }
}
