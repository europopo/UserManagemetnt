import { Directive, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from "../service/message.service";
let nextId = 1;
@Directive({
  selector: '[appSpy]'
})
export class SpyDirective implements OnInit, OnDestroy {
  constructor(public messageService: MessageService) { }

  ngOnInit()    { this.logIt(`onInit`); }

  ngOnDestroy() { this.logIt(`onDestroy`); }

  private logIt(msg: string) {
    this.messageService.add(`Spy #${nextId++} ${msg}`);
  }
}
