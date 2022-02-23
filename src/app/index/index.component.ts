import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthGuard } from '../auth.guard';
import { LoginEntity } from '../entities/login.entity';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  login : LoginEntity = new LoginEntity();

  username : string = "";
  lastname : string = "";
  firstname : string = "";
  birthdate : string = "";


  personForm = new FormGroup({
    item : new FormControl(""),
  });

  constructor(private ls : LoginService, private router: Router, private activatedRoute : ActivatedRoute, public guard : AuthGuard, private app : AppComponent) { }

  ngOnInit(): void {
    const user = sessionStorage.getItem("user");
    var obj = JSON.parse(user!);

    this.username = obj.username;
    this.lastname = obj.lastname;
    this.firstname = obj.firstname;
    this.birthdate = obj.birthdate;

    // this.ls.login(this.login).subscribe({
    //   next: (data) => { 
    //     this.logins = data
    //   },
    //   error: (err) => { console.log(err.error.message) }
    // });
    // this.app.user = this.guard.getUser();
  }

  

}
