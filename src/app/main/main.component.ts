import { Component, OnInit } from '@angular/core';
import { LoginService } from "../service/login/login.service";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  id: string = '';
  constructor(
    public loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id') || ''
  }

  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  loginOut() {

  }



}
