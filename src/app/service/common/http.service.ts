import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  ) {
      datasource.api.forEach((db) => {
        if (db.public) return this.ROOTURL = db.host;
      });
  }


  async get(url: string) {
    url = this.ROOTURL + url;
    const response = await this.http.get(url).toPromise()
    .then(res => res)
    .catch(e => {
      console.log(e);
    });
    return response;
  }

  async post(url: string, body: any) {
    url = this.ROOTURL + url;
    const response = await this.http.post(url, body).toPromise()
    .then(res => res)
    .catch(e => {
      console.log(e);
    });
    return response;
  }
}
