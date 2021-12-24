import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu-private',
  templateUrl: './menu-private.component.html',
  styleUrls: ['./menu-private.component.scss'],
})
export class MenuPrivateComponent implements OnInit {
  loggedUser: string = '';
  constructor(public auth: AuthService, private router: Router) {}
  logout() {
    this.auth.logout();
    this.router.navigate(['']);
  }
  ngOnInit(): void {
    if (this.auth.isLogged()) {
      this.loggedUser = this.auth.getUsername().split('@')[0];
      this.router.navigate(['/dashboard']);
    }
  }
}
