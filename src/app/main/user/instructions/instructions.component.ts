import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {

  qid: number;
  quiz: any;

  constructor(
    private _route: ActivatedRoute, private _toast:HotToastService,
    private _quiz: QuizService
  ) { }

  ngOnInit(): void {

    this.qid = this._route.snapshot.params['qid'];

    this._quiz.getQuiz(this.qid).subscribe((data) => {
      this.quiz = data;
    }, (err) => {
      this._toast.error("Error Loding Exam!");
    });
  }

}

