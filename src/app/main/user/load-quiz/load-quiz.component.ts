import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AnimationOptions } from 'ngx-lottie';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.scss']
})
export class LoadQuizComponent implements OnInit {

  catId: number;
  quizzes;
  length: number;

  constructor(private _route: ActivatedRoute, private _quiz: QuizService,
    private _toast: HotToastService) { }

  ngOnInit(): void {
    
    this._route.params.subscribe(
      (params)=>{
        this.catId = this._route.snapshot.params['id'];
        if(this.catId == 0){
          this._quiz.getActiveQuizzes().subscribe(
            (data) => {
              this.quizzes = data;
            }, (err)=>{
              this._toast.error("Server Error");
            }
          );
        } else {
          this._quiz.getActiveQuizzesOfCategory(this.catId).subscribe((data) => { 
            this.quizzes = data;
            this.length = this.quizzes.length;
           }, (error)=> {
            this._toast.error("Server Error!");
           });
         }
      }
    );
  }

  options: AnimationOptions = {
    path: '/assets/noData.json',
  }

}
