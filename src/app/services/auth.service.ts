import { Injectable } from '@angular/core';
import { LoginEntity } from '../model/LoginEntity';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedUser: string;
  constructor() {
    const savedUserName = window.localStorage.getItem('username');
    if (savedUserName) {
      this.loggedUser = savedUserName;
    } else {
      this.loggedUser = '';
    }
  }

  login(loginData: LoginEntity): boolean {
    const { username, password } = loginData;
    const correctUsername = 'ramon@masterlemoncode.net' === username;
    const correctPassWord = '12345678' === password;
    if (correctUsername && correctPassWord) {
      window.localStorage.setItem('username', username);
      this.loggedUser = username;
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedUser = '';
    window.localStorage.removeItem('username');
  }
  isLogged(): boolean {
    if (this.loggedUser === '') return false;
    return true;
  }
  getUsername(): string {
    return this.loggedUser;
  }
}
