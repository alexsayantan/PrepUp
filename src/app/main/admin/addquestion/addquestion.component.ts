import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { QuestionService } from 'src/app/services/question.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.scss']
})
export class AddquestionComponent implements OnInit {

  qid: any;
  qTitle: string;
  question = {
    quiz : {

    },
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
  }

  public Editor = ClassicEditor;
  
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _question: QuestionService, private _toast: HotToastService) { }

  ngOnInit(): void {
    this.qid = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title'];
    this.question.quiz['qid'] = this.qid;
  }

  formSubmit(){
    if(this.question.content.trim() == '' || this.question.content.trim() == null 
     || this.question.option1.trim() == '' || this.question.option2.trim() == ''
     || this.question.option3.trim() == '' || this.question.option4.trim() == ''
     || this.question.option1.trim() == null || this.question.option2.trim() == null
     || this.question.option3.trim() == null || this.question.option4.trim() == null 
     || this.question.answer.trim() == null || this.question.answer.trim() == ''){
      this._toast.error("Content / Options / Answers can't be empty!");
      return;
    }

    this._question.addQuestion(this.question).subscribe(
      (data)=>{
        this.question = {
          quiz : {
      
          },
          content: '',
          option1: '',
          option2: '',
          option3: '',
          option4: '',
          answer: '',
        }
        this._toast.success("Question Details Added!");
        this.ngOnInit();
      }, (err)=>{
        this._toast.error("Error Adding Question!");
      }
    );

  } 

}
