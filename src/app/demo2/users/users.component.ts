import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  constructor(
    private userservice: UserService,
  ) { }


  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userservice.getUsers()
    .subscribe(users => this.users = users); // 異步獲取數據
  }

  add(name: string): void {
    name = name.trim();
    if(!name){ return };
    this.userservice.addUser({name} as User)
      .subscribe(user => {
        this.users.push(user);
      })
  }

  delete(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.userservice.deleteUser(user).subscribe();
  }

}
