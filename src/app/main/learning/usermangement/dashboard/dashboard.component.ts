import { Component, OnInit } from '@angular/core';
import { User } from "../../../../class/user";
import { UserService } from "../../../../service/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  showchildmsg(msg):void {
    console.log(msg);
  }

  getUser(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users.slice(1,5));
  }
}
