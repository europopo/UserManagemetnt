import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, filter } from 'rxjs/operators';
import { HttpService } from "../common/http.service";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  tip: string;
  constructor(
    private http: HttpService,
    private router: Router,
  ) { }

  checkUser(user): Observable<any> {
    // return await this.http.get(`user?id=${id}`)
    // .then((users: any)=>{
    //   //users.push(admin);
    //   if (users.data) {
    //     if(users.data.some((s)=>s.userid==id&&s.password==pw)){
    //       return true;
    //     }
    //   }
    // });
    return this.http.post(`login`, user);
  }

  loginOut(): void {
    localStorage.removeItem('id');
    this.router.navigate(['login']);
  }


  token() {
    this.tip = 'a';
    return this.http.get('token');
  }
}
