import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from "../message.service";

// import db from "../../../assets/config/datasource.json";
const datasource = require('../../../assets/config/datasource.json');

const options = {
  headers: new HttpHeaders({
    'Cache-Control': 'no-cache'
  })
}
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  ROOTURL: string;

  constructor(
    private http: HttpClient,
    public messageService: MessageService,
  ) {
      datasource.api.forEach((db) => {
        if (db.public) return this.ROOTURL = db.host;
      });
  }


  async get(url: string) {
    url = this.ROOTURL + url;
    const response = await this.http.get(url).toPromise()
    .then(res => res)
    .catch((e: HttpErrorResponse) => {
      if(e.status==0) {
        this.messageService.showMessage('error','连接失败');
        throw e;
      }
    });
    return response;
  }

  async post(url: string, body: any) {
    url = this.ROOTURL + url;
    const response = await this.http.post(url, body).toPromise()
    .then(res => res)
    .catch((e:HttpErrorResponse) => {
      console.log(e);
      if (e.status==0) {
        
      }
    });
    return response;
  }
}
