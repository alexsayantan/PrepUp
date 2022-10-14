import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  marksGot: number = 0;
  correctAnswers: number = 0;
  attempted: number = 0;
  isSubmit: boolean = false;
  timer: any;

  constructor(
    private _location: LocationStrategy,
    private _route: ActivatedRoute,
    private _question: QuestionService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.qid = this._route.snapshot.params['qid'];
    this.loadQuestions();
  }

  public loadQuestions() {
    this._question.getQuestionOfQuizForExam(this.qid)
      .subscribe(
        (data: any) => {
          this.questions = data;
          this.timer = this.questions.length * 2 * 60;
          this.questions.forEach((q: any) => {
            q['givenAnswer'] = '';
          });
          this.startTimer();
        }, (err: any) => { Swal.fire("Error", "Error while loading questions!", "error") }
      );
  }

  public preventBackButton() {
    history.pushState(null, null, location.href);
    this._location.onPopState(
      () => { history.pushState(null, null, location.href); },
    );
  }

  submitQuiz() {
    Swal.fire({
      title: "Do you want to submit the exam?",
      showCancelButton: true,
      confirmButtonText: "Submit",
      icon: "info"
    }).then(
      (e) => {
        if (e.isConfirmed) {
          this.evalQuiz();
        }
      }
    );
  }

  public startTimer() {
    let t: any = window.setInterval(
      () => {
        if (this.timer <= 0) {
          this.evalQuiz();
          clearInterval(t);
        } else {
          this.timer--;
        }
      }
      , 1000);
  }

  getFormattedTime() {
    let mm = Math.floor(this.timer / 60);
    let ss = this.timer - mm * 60;
    return `${mm} min : ${ss} sec`;
  }

  evalQuiz() {
    this.isSubmit = true;
    this.questions.forEach(q => {
      if (q.givenAnswer == q.answer) {
        this.correctAnswers++;
        let marksSingle = this.questions[0].quiz.maxMarks / this.questions.length;
        this.marksGot += marksSingle;
      }
      if (q.givenAnswer.trim() != '') {
        this.attempted++;
      }
      this._router.navigate(['/result/'+this.marksGot+'/'+this.correctAnswers+'/'+this.attempted])
    });
  }

}
