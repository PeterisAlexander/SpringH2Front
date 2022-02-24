import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { GeneratorPersonComponent } from './generator-person/generator-person.component';
import { IndexComponent } from './index/index.component';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path : "home" , component: IndexComponent},
  // { path : "home" , component: IndexComponent},
  { path : "generator" , component: GeneratorPersonComponent},
  { path : "login" , component: LoginComponent },
  { path : "registration" , component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
