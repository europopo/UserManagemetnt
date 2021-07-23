import { Injectable } from '@angular/core';
import { User } from "../class/user";
import { HttpService } from "./common/http.service";
@Injectable({
  providedIn: 'root'
})
export class TableService {
  users: any;
  constructor(
    private http: HttpService,
  ) { }

  async createTable(){
    return await this.http.get('user');
  }
}
