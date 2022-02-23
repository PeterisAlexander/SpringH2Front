import { Component } from '@angular/core';
import { LoginEntity } from './entities/login.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trainingFront';
  user : LoginEntity = new LoginEntity();
}
