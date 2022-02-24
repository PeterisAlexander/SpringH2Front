import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndexComponent } from '../index/index.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout():void {
    sessionStorage.removeItem("connected")
    this.router.navigate(['login'])
    sessionStorage.removeItem("user")
  }

  login():void {
    this.router.navigate(['login'])
  }
}
