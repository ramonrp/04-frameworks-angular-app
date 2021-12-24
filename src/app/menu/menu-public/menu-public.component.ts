import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-public',
  templateUrl: './menu-public.component.html',
  styleUrls: ['./menu-public.component.scss'],
})
export class MenuPublicComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/home']);
  }
}
