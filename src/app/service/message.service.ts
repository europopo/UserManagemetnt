import { Injectable } from '@angular/core';
import { NzMessageService,  } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  message$ = new Subject();

  constructor(
    private messageService: NzMessageService,
  ) { 

  }

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  showMessage(
    type: 'success' | 'info' | 'warning' | 'error' | 'loading',
    msg: string,
    time?: number,
  ): string {
    return this.messageService.create(type, msg, { nzDuration: time || 3000 }).messageId;
  }
}
