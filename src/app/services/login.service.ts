import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginEntity } from '../entities/login.entity';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  public login(login: LoginEntity): Observable<any> {
    return this.http.post<any>("http://localhost:8080/api/login", login);
  }

  public register(login: LoginEntity): Observable<any> {
    return this.http.post<any>("http://localhost:8080/api/createUser", login);
  }

  public user(): Observable<LoginEntity[]> {
    return this.http.get<LoginEntity[]>("http://localhost:8080/api/users");
  }
}
