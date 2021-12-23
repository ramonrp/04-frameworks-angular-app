import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoginEntity } from '../model/LoginEntity';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginData: LoginEntity;
  constructor(private auth: AuthService, private router: Router) {
    this.loginData = {
      username: '',
      password: '',
    };
  }
  submitForm() {
    const correctLogin = this.auth.login(this.loginData);
    if (correctLogin) {
      this.router.navigate(['/dashboard']);
    }
  }
  ngOnInit(): void {}
}
