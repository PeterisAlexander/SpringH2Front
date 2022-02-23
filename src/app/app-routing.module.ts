import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { GeneratorPersonComponent } from './generator-person/generator-person.component';
import { IndexComponent } from './index/index.component';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path : "" , redirectTo: '/home', pathMatch: 'full' },
  { path : "home" , component: IndexComponent , canActivate: [AuthGuard]},
  { path : "generator" , component: GeneratorPersonComponent, canActivate: [AuthGuard]},
  { path : "login" , component: LoginComponent },
  { path : "registration" , component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
