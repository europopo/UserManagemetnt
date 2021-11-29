import { Component, OnInit } from '@angular/core';
import { ChatService } from './service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  shownameinput = false; // 房間輸入框顯示

  roomname: string; // 房间名

  constructor(
    public chatService: ChatService,
  ) { }

  ngOnInit(): void {
  }

  createRoom() {
    if (this.roomname) {
      this.chatService.createRoom(this.roomname);
    }
  }

}
