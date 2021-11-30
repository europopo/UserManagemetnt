import { HttpErrorResponse } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from "../message.service";


// import db from "../../../assets/config/datasource.json";
const datasource = require('../../../assets/config/datasource.json');


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


  get(url: string) {
    return this.http.get(this.ROOTURL + url);
  }

  post(url: string, body: any) {
    return this.http.post(this.ROOTURL + url, body);
  }


}
