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
    // 監控頁面刷新或離開
    window.onbeforeunload = (e) =>{
      e = e || window.event;
      if (e) {
        // TODO: 踢出房間動作
      }

    }


  }

  ngOnDestroy() {


  }

}
