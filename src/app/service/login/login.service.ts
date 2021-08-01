import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from "../common/http.service";

const admin = [{empid: 'admin', password: 'admin'}];
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpService,
    private router: Router,
  ) { }

  async checkUser(id: string, pw: string): Promise<boolean> {
    let islogin = false;
    if (admin.some((s)=>s.empid==id&&s.password==pw)) {
      return true;
    }
    await this.http.get('user')
    .then((users: Array<any>)=>{
      //users.push(admin);
      if (users) {
        if(users.some((s)=>s.empid==id&&s.password==pw)){
          islogin = true;
        }
      }
    });
    return islogin;
  }

  loginOut(): void {
    localStorage.removeItem('id');
    this.router.navigate(['login']);
  }
}
