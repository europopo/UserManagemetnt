import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    ) {}

  submitForm(): void {
    if (this.validateForm.value.userName=='europe'&&this.validateForm.value.password==123) {
      this.router.navigate(['/main/learning']);
    }else{
      alert('密码错误');
    }
    
    
  }
  restart() {
    this.validateForm.controls.userName.setValue('');
    this.validateForm.controls.password.setValue('');
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required, Validators.maxLength(20)]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
