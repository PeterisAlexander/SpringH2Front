import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthGuard } from '../auth.guard';
import { LoginEntity } from '../entities/login.entity';
import { ConfigService } from '../services/config.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new LoginEntity();
  msg = "";

  username = "";
  password = "";

  constructor(private ls: LoginService, private route: Router, private http: HttpClient, private router: Router, private app: AppComponent, private guard: AuthGuard
    , private config: ConfigService) { }

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

  public logine() {
    let u = { "username": this.login.username, "password": this.login.password };

    this.ls.login(u).subscribe(
      {
        next: (data) => {
          sessionStorage.setItem("connected", "1");
          sessionStorage.setItem("user", JSON.stringify(data));
          this.router.navigate(['home']);
          this.app.user = data;


          this.config.httpOptions.headers = new HttpHeaders({
            'Authorization': "Basic " + data.password
          });

        },
        error: (err) => {
          this.msg = "Please enter valid username and password";
          console.log(err.error.message);
        }
      }
    )
  }

}
