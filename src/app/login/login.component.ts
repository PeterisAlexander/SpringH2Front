import { Component, OnInit } from '@angular/core';
import { LoginEntity } from '../entities/login.entity';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new LoginEntity();

  constructor(private ls : LoginService) { }

  ngOnInit(): void {
  }

  public loginUsername() {
    this.ls.login(this.login).subscribe(
      data => console.log(data),
    );
  }

}
