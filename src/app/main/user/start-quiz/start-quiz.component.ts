import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.scss']
})
export class StartQuizComponent implements OnInit {

  qid: number;
  questions: any;

  constructor(
    private _location: LocationStrategy,
    private _route: ActivatedRoute,
    private _question: QuestionService,
  ) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.qid = this._route.snapshot.params['qid'];
    this.loadQuestions();
  }

  public loadQuestions() {
    this._question.getQuestionOfQuizForExam(this.qid)
    .subscribe(
      (data: any) =>{
        this.questions = data;
        }, (err: any) => { Swal.fire("Error","Error while loading questions!","error")}
    );
  }

  public preventBackButton(){
    history.pushState(null, null, location.href );
    this._location.onPopState(
      ()=>{ history.pushState(null, null, location.href ); },
    );
  }

}
