import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginEntity } from '../entities/login.entity';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-generator-person',
  templateUrl: './generator-person.component.html',
  styleUrls: ['./generator-person.component.css']
})
export class GeneratorPersonComponent implements OnInit {

  nbPerson: number = 1;

  logins: Array<LoginEntity> = [];
  
  personForm = new FormGroup({
    item : new FormControl(""),
  });
  
  constructor(private ls : LoginService) { }

  ngOnInit(): void {
  }

  public generatePerson(): void {
    this.nbPerson = this.personForm.get('item')?.value;
    this.ls.getGeneratePerson(this.nbPerson).subscribe({
      next: (data) => { this.logins = data },
      error: (err) => { console.log(err.error.message) }
    });
  }

}
