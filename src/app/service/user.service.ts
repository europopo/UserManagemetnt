import { Injectable } from '@angular/core';
import { User } from '../class/user';
//import { USERS } from './mock-users';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersURL = 'api/users'; // 定义用户资源访问地址
  private httpOptions: Object = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  // getUsers(): Observable<User[]> {
  //   this.messageService.add('UserService: 已經獲取到用戶列表！');
  //   return of(USERS);
  // }

  getUsers(): Observable<User[]> {
    this.log('已经获取到用户列表');
    return this.http.get<User[]>(this.usersURL)
     .pipe(
       tap(Users => this.log('fetched Users')), // tap方法可以查看到Observable返回的数据，并做一些操作，但不会改变数据
       catchError(this.handleError('getUsers', []))  // 建立Observable的结果处理管道pipe来处理错误结果catchError
     );
  }

  getUser(id: number): Observable<User> {
    this.log(`UserService: 已经获取到用户 id=${id}`);
    const url = `${this.usersURL}/${id}`;
    return this.http.get<User>(url)
    .pipe(
      tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  updateUser (user: User): Observable<any> {
    return this.http.put(this.usersURL, user, this.httpOptions).pipe(
      tap(_=> this.log(`updated user id=${user.id}`)),
      catchError(this.handleError<any>('updateUser'))
    )
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersURL, user, this.httpOptions).pipe(
      tap((user: User) => this.log(`added user id=${user.id}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersURL}/${id}`;

    return this.http.delete<User>(url, this.httpOptions).pipe(
      tap(_=> this.log(`deleted user id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  searchUsers(term: string): Observable<User[]> {
    if(!term.trim()) {
      return of([]);
    }
    return this.http.get<User[]>(`${this.usersURL}/?name=${term}`).pipe(
      tap(_=> this.log(`found Users matching ${term}`)),
      catchError(this.handleError<User[]>('searchUsers', []))
    );
  }

}
