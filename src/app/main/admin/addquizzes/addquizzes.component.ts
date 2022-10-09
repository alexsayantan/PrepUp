import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-addquizzes',
  templateUrl: './addquizzes.component.html',
  styleUrls: ['./addquizzes.component.scss']
})
export class AddquizzesComponent implements OnInit {

  categories = [];

  quizData = {
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active:true,
    category: {
      id: ''
    },
  };

  constructor(private _cat: CategoryService, 
    private toast: HotToastService, private _quiz: QuizService){}

  ngOnInit(): void {
    
    this._cat.categories().subscribe(
      (data: any)=>{

        //categories load successfully
        this.categories = data;
      }, (error)=>{
        this.toast.error("Server Error!");
      }
    );
  }

  

  
  addQuiz() {
    console.log(this.quizData);
    if(this.quizData.title.trim()=='' || this.quizData.title.trim()==null){
      this.toast.warning("Title cannot be empty!", { duration: 3000 });
      return;
    }

    //call server
    this._quiz.addQuiz(this.quizData).subscribe((data) => {
      this.quizData = {
        title:'',
        description:'',
        maxMarks:'',
        numberOfQuestions:'',
        active:true,
        category: {
          id: ''
        },
      };
      this.toast.success("Quiz added!", { duration: 3000 });
    }, err => {
      this.toast.error("Error adding quiz!", { duration: 3000 });
    });
  }

}
