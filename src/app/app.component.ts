import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebSocketService } from './service/common/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  constructor(
    public webSocketService: WebSocketService
    ) {}

  ngOnInit() {



  }

  ngOnDestroy() {


  }

}
