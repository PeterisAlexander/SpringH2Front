import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  registerForm = new FormGroup({
    username : new FormControl("", Validators.required),
    password : new FormControl("", Validators.required),
    lastname : new FormControl("",Validators.required),
    firstname : new FormControl("", Validators.required),
    birthdate : new FormControl("",Validators.required),
  });

  constructor(private ls : LoginService, private router : Router) { }

  ngOnInit(): void {
  }

  public register() {
    let register = this.registerForm.value

    console.log( register ); 

      this.ls.register(register).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['login'])
        }
      )
    }
}
