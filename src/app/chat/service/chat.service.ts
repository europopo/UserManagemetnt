import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/service/common/http.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public http: HttpService,
  ) { }

  createRoom(roomname: string) {
    this.http.post('room', {roonname: roomname});
    // this.http.get('user?id=europe');
  }

}
