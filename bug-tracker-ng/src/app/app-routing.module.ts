import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';
import { BugComponent } from './bugs/bug/bug.component';
import { BugModalComponent } from './bugs/bug-modal/bug-modal.component';

import { AuthRouteGuardGuard } from './auth-route-guard.guard';
import { AuthLoginGuard } from './auth-login.guard';

const routes: Routes = [
  { path: 'auth', component: LoginComponent, 
    children: [
      { path: 'login', component: LoginFormComponent},
      { path: 'register', component: RegisterFormComponent },
  ]},
  { path: 'bugs', component: BugComponent, canActivate: [AuthRouteGuardGuard], children: [
    { path: 'edit', component: BugModalComponent }
  ] },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
