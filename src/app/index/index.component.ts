import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginEntity } from '../entities/login.entity';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  login : LoginEntity = new LoginEntity();

  logins: Array<LoginEntity> = [];

  constructor(private ls : LoginService, private router: Router) { }

  ngOnInit(): void {
    this.ls.user().subscribe({
      next: (data) => { this.logins = data },
      error: (err) => { console.log(err.error.message) }
    });
  }

  logout():void {
    console.log( "logout" ); 
    sessionStorage.removeItem("connected")
    this.router.navigate(['login'])
    sessionStorage.removeItem("user")
  }

}
