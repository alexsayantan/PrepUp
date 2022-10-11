import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewquestions',
  templateUrl: './viewquestions.component.html',
  styleUrls: ['./viewquestions.component.scss']
})
export class ViewquestionsComponent implements OnInit {

  qid: any;
  qTitle: string;
  questions;

  constructor(private _route: ActivatedRoute,
    private _question: QuestionService, private toast: HotToastService) { }

  ngOnInit(): void {
    this.qid = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title'];
    this._question.getQuestion(this.qid).subscribe(
      (data) => {
        this.questions = data;
      }, (err) => {
        this.toast.error("Server Error!");
      }
    );
  }

  deleteQuestion(qid) {
    Swal.fire({
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Delete",
      title: "Are you sure?",
    }).then(
      (res) => {
        if (res.isConfirmed) {
          this._question.deleteQuestion(qid).subscribe(
            (data) => {
              this.toast.success("Question deleted successfully!");
            });
            this.questions = this.questions.filter((q) => q.quesId != qid); 
              
        } (err) => {this.toast.error("Error deleting question!");};
      }
    );

  }

}
