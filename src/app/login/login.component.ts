import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebSocketService } from '../service/common/web-socket.service';
import { LoginService } from "../service/login/login.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  validateForm!: FormGroup;

  constructor(
    public loginService: LoginService,
    public webSocketService: WebSocketService,
    private fb: FormBuilder,
    private router: Router,
    ) {}

  submitForm() {
    const user = {
      id: this.validateForm.value.userName,
      pw: this.validateForm.value.password
    }
    this.loginService.checkUser(user)
    .subscribe((res)=>{
        if (res.length) {
          // localStorage.setItem('id', this.validateForm.value.userName);
          this.router.navigate(['/chat']);
        } else {
          alert('密码错误');
        }
      });
  }
  restart() {
    this.validateForm.controls.userName.setValue('');
    this.validateForm.controls.password.setValue('');
  }

  sayhi() {
    this.webSocketService.emitSocketServer('login', 'success');
  }

  ngOnInit(): void {
    this.loginService.token().subscribe((res)=> console.log(res));
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required, Validators.maxLength(20)]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  ngOnDestroy(): void {

  }

}
