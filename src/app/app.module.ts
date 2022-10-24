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
import { ProfileComponent } from './main/admin/profile/profile.component';
import { SidebarComponent } from './main/admin/sidebar/sidebar.component';
import { StartuiComponent } from './main/admin/startui/startui.component';
import { CategoriesComponent } from './main/admin/categories/categories.component';
import { AddcategoriesComponent } from './main/admin/addcategories/addcategories.component';
import { QuizzesComponent } from './main/admin/quizzes/quizzes.component';
import { AddquizzesComponent } from './main/admin/addquizzes/addquizzes.component';
import { UpdatequizComponent } from './main/admin/updatequiz/updatequiz.component';
import { ViewquestionsComponent } from './main/admin/viewquestions/viewquestions.component';
import { AddquestionComponent } from './main/admin/addquestion/addquestion.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UserSidebarComponent } from './main/user/user-sidebar/user-sidebar.component';
import { LoadQuizComponent } from './main/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './main/user/instructions/instructions.component';
import { StartQuizComponent } from './main/user/start-quiz/start-quiz.component';
import { ResultComponent } from './main/user/result/result.component';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule, PB_DIRECTION, POSITION, SPINNER } from "ngx-ui-loader";


export function playerFactory(){
  return player;
}

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "red",
  bgsPosition: POSITION.bottomCenter,
  fgsColor: "#f12997",
  text: "Loading...",
  fgsSize: 80,
  hasProgressBar: false,
  fgsType: SPINNER.squareJellyBox,
};

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
    StartuiComponent,
    CategoriesComponent,
    AddcategoriesComponent,
    QuizzesComponent,
    AddquizzesComponent,
    UpdatequizComponent,
    ViewquestionsComponent,
    AddquestionComponent,
    UserSidebarComponent,
    LoadQuizComponent,
    InstructionsComponent,
    StartQuizComponent,
    ResultComponent
  ],
  imports: [
    LottieModule.forRoot({player: playerFactory}),
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CKEditorModule,
    HotToastModule.forRoot({
      position: 'bottom-center',
    }),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    }),
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
