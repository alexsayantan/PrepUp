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
import { QuizzesComponent } from './main/admin/quizzes/quizzes.component';
import { AddquizzesComponent } from './main/admin/addquizzes/addquizzes.component';
import { UpdatequizComponent } from './main/admin/updatequiz/updatequiz.component';
import { ViewquestionsComponent } from './main/admin/viewquestions/viewquestions.component';
import { AddquestionComponent } from './main/admin/addquestion/addquestion.component';
import { LoadQuizComponent } from './main/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './main/user/instructions/instructions.component';
import { StartQuizComponent } from './main/user/start-quiz/start-quiz.component';
import { ResultComponent } from './main/user/result/result.component';

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
      { 
        path: 'quizzes', component: QuizzesComponent, pathMatch: 'full' 
      },
      { 
        path: 'addquizzes', component: AddquizzesComponent, pathMatch: 'full' 
      },
      {
        path: 'quiz/:qid', component: UpdatequizComponent, pathMatch: 'full' 
      },
      {
        path: 'view-questions/:qid/:title', component: ViewquestionsComponent, pathMatch: 'full' 
      },
      {
        path: 'add-questions/:qid/:title', component: AddquestionComponent, pathMatch: 'full'
      }
    ]
  },
  { path: 'user', component: UserdashboardComponent, canActivate: [NormalguardGuard],
    children: [
      {
        path: ':id', component: LoadQuizComponent, pathMatch: 'full'
      },
      {
        path: 'instructions/:qid', component: InstructionsComponent, pathMatch: 'full'
      },
    ]
  },
  {
    path: 'start/:qid', component: StartQuizComponent,pathMatch: 'full', canActivate: [NormalguardGuard ]
  },
  {
    path: 'result/:marksGot/:correctAnswers/:attempted', component: ResultComponent, pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
