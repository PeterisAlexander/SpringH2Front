import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginEntity } from '../entities/login.entity';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  login = new LoginEntity();
  
  constructor(private ls : LoginService, private route : Router) { }

  ngOnInit(): void {
  }

  public register() {
    this.ls.register(this.login).subscribe(
      data => {
        console.log(data),
        this.route.navigate(['/login'])
      }
    );
  }
}
