import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HotToastModule } from '@ngneat/hot-toast';
import { HomeComponent } from './main/home/home.component';
import { AuthInterceptorProvider } from './services/auth.interceptor';
import { UserdashboardComponent } from './main/user/userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './main/admin/admindashboard/admindashboard.component';
import { LottieModule } from 'ngx-lottie';
import  player  from 'lottie-web';
import { ProfileComponent } from './components/profile/profile.component';
import { SidebarComponent } from './main/admin/sidebar/sidebar.component';

export function playerFactory(){
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    ProfileComponent,
    SidebarComponent,
  ],
  imports: [
    LottieModule.forRoot({player: playerFactory}),
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HotToastModule.forRoot({
      position: 'bottom-center',
    })
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
