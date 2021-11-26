import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  shownameinput = false; // 房間輸入框顯示


  constructor() { }

  ngOnInit(): void {
  }

  createRoom() {

  }

}
