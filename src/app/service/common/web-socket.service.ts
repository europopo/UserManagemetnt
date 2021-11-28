import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { MessageService } from "../message.service";
const datasource = require('../../../assets/config/datasource.json');
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  ws: any;
  wsUrl: string;
  constructor(
    public messageService: MessageService,
  ) {
    datasource.socket.forEach((db) => {
      if (db.public) return this.wsUrl = db.host;
    });
   }

  connectSocket() {
    this.ws = io(this.wsUrl);
    this.ws.on('connect', (msg)=>{
      console.log('the Socket is connected!');
    });

    this.ws.on("disconnect", (reason) => {
      console.log("io disconnect reason:", reason);
      if (reason === "io server disconnect") {
        // the disconnection was initiated by the server, you need to reconnect manually
        this.ws.connect();
      }
      // else the socket will automatically try to reconnect
    });

  }

  emitSocketServer(event, data) {
    this.ws.emit(event, data);
  }

  diconnectSocket() {
    this.ws.disconnect();
  }

}
