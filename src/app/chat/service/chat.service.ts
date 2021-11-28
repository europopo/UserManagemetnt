import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/service/common/http.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public http: HttpService,
  ) { }

  createRoom() {
    
  }

}
