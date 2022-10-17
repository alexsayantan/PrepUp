import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  marksGot: number = 0;
  totalMarks:any = {
    maxMarks: ''
  }
  correctAnswers: number = 0;
  attempted: number = 0;
  qid: any;

  constructor(private _location: LocationStrategy,
    private _route: ActivatedRoute,
    private _quiz: QuizService,
    private _toast: HotToastService) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.marksGot = this._route.snapshot.params['marksGot'];
    this.correctAnswers = this._route.snapshot.params['correctAnswers'];
    this.attempted = this._route.snapshot.params['attempted'];
    this.qid = this._route.snapshot.params['qid'];
    this._quiz.getQuiz(this.qid).subscribe(
      (data)=>{
        this.totalMarks = data;
      }, (err) => {
        this._toast.error(err);
      }
    );
  }

  private preventBackButton() {
    history.pushState(null, null, location.href);
    this._location.onPopState(
      () => { history.pushState(null, null, location.href); },
    );
  }

  public printData(){
    window.print();
  }
}
