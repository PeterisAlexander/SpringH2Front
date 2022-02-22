import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  nbPerson: number = 1;

  username : string = "";
  lastname : string = "";
  firstname : string = "";
  birthdate : string = "";


  personForm = new FormGroup({
    item : new FormControl(""),
  });

  constructor(private ls : LoginService, private router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    
    this.generatePerson();
    this.ls.login(this.login).subscribe({
      next: (data) => { 
        this.logins = data
      },
      error: (err) => { console.log(err.error.message) }
    });
  }

  logout():void {
    sessionStorage.removeItem("connected")
    this.router.navigate(['login'])
    sessionStorage.removeItem("user")
  }

  public generatePerson(): void {
    this.nbPerson = this.personForm.get('item')?.value;
    this.ls.getGeneratePerson(this.nbPerson).subscribe({
      next: (data) => { this.logins = data },
      error: (err) => { console.log(err.error.message) }
    });
  }

}
