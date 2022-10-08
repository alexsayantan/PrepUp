import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './main/admin/profile/profile.component';
import { AdmindashboardComponent } from './main/admin/admindashboard/admindashboard.component';
import { HomeComponent } from './main/home/home.component';
import { UserdashboardComponent } from './main/user/userdashboard/userdashboard.component';
import { AdminguardGuard } from './services/adminguard.guard';
import { LoginguardGuard } from './services/loginguard.guard';
import { NormalguardGuard } from './services/normalguard.guard';
import { StartuiComponent } from './main/admin/startui/startui.component';
import { CategoriesComponent } from './main/admin/categories/categories.component';
import { AddcategoriesComponent } from './main/admin/addcategories/addcategories.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full', canActivate: [LoginguardGuard] },
  { path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [LoginguardGuard] },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'admin', component: AdmindashboardComponent, canActivate: [AdminguardGuard],
    children: [
      {
        path: '', component: StartuiComponent, pathMatch: 'full'
      },
      {
        path: 'profile', component: ProfileComponent, pathMatch: 'full'
      },
      { 
        path: 'categories', component: CategoriesComponent, pathMatch: 'full' 
      },
      { 
        path: 'addcategories', component: AddcategoriesComponent, pathMatch: 'full' 
      },
    ]
  },
  { path: 'user', component: UserdashboardComponent, pathMatch: 'full', canActivate: [NormalguardGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
