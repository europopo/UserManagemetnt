import { Component, OnInit, EventEmitter } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { User } from "../../../../class/user";
import { UserService } from "../../../../service/user.service";

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  users$: Observable<User[]>;
  showrequest = new EventEmitter();
  private searchTerms = new Subject<string>();

  constructor(private userService: UserService) { }

  show(): void {
    this.showrequest.emit("hello");
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.users$ = this.searchTerms.pipe(
      //等待300ms
      debounceTime(300),
      //忽略与前一次搜多内容相同的数据
      distinctUntilChanged(),
      //当搜索的内容变更时，切换到新的搜索Observable
      switchMap((term: string) => this.userService.searchUsers(term)),
    )
  }


}
