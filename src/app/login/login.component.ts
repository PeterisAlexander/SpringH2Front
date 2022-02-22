import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginEntity } from '../entities/login.entity';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new LoginEntity();
  msg = "";

  constructor(private ls : LoginService, private route : Router) { }

  ngOnInit(): void {
  }

  public loginUsername() {
    this.ls.login(this.login).subscribe(
      data => {
        this.route.navigate(['/home'])
      },
      error => {
        this.msg = "Please enter valid username and password"
      }
    );
  }

  public goToRegistration() {
    this.route.navigate(["/registration"]);
  }

}
