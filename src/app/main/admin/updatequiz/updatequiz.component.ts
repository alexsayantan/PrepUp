import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatequiz',
  templateUrl: './updatequiz.component.html',
  styleUrls: ['./updatequiz.component.scss']
})
export class UpdatequizComponent implements OnInit {

  qid = null;
  quiz: any;
  categories;

  constructor(private _route: ActivatedRoute,  private _router: Router,
    private _quiz: QuizService, private _cat: CategoryService) { }

  ngOnInit(): void {
    this.qid = this._route.snapshot.params['qid'];
    this._quiz.getQuiz(this.qid).subscribe(
      (data) => { this.quiz = data; },
      (err) => { Swal.fire("Try After Some Time!", "Server Error", "error")}
    );

    this._cat.categories().subscribe(
      (data) => { this.categories = data; }, (err) => { Swal.fire("Try after sometime!", "Error in loding category!", "error")}
    );
  }

  updateQuiz(){
    this._quiz.updateQuiz(this.quiz).subscribe((data) => {
      Swal.fire("Success"," Updated successfully!", "success").then(
        (e) => this._router.navigate(["/admin/quizzes"])
      );
    }, (err) => {
      Swal.fire("Error"," Error updating quiz!", "error");
    });
  }

}
