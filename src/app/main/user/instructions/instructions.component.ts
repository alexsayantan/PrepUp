import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {

  qid: number;
  quiz: any;
  title: string;
  description: string;
  numberOfQuestions: number;
  maxMarks: number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _toast:HotToastService,
    private _quiz: QuizService
  ) { }

  ngOnInit(): void {

    this.qid = this._route.snapshot.params['qid'];

    this._quiz.getQuiz(this.qid).subscribe((data) => {
      this.quiz = data;
      this.title = this.quiz.title;
      this.description = this.quiz.description;
      this.numberOfQuestions = this.quiz.numberOfQuestions;
      this.maxMarks = this.quiz.maxMarks;
    }, (err) => {
      this._toast.error("Error Loding Exam!");
    });
  }

  startQuiz(){
    Swal.fire({
      title: "Once you start the exam you can't leave!",
      icon: 'info',
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: 'Start',
      denyButtonText: 'Cancel',
    }).then(
      (result)=>{
        if(result.isConfirmed){
          this._router.navigate(['/start/'+this.quiz.qid]);
        } else if(result.isDenied){
          this._toast.warning('Exam not started. Please try again.');
        }
      }
    );
  }



}

