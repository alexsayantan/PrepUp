import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdmindashboardComponent } from './main/admin/admindashboard/admindashboard.component';
import { HomeComponent } from './main/home/home.component';
import { UserdashboardComponent } from './main/user/userdashboard/userdashboard.component';
import { AdminguardGuard } from './services/adminguard.guard';
import { LoginguardGuard } from './services/loginguard.guard';
import { NormalguardGuard } from './services/normalguard.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'register', component: RegisterComponent , pathMatch: 'full', canActivate: [LoginguardGuard]},
  {path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [LoginguardGuard]},
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'admin', component: AdmindashboardComponent, pathMatch: 'full', canActivate: [AdminguardGuard]},
  {path: 'user', component: UserdashboardComponent, pathMatch: 'full', canActivate: [NormalguardGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
