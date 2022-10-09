import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {

  quizzes = []

  constructor(
    private quizService: QuizService,
    private toast: HotToastService,) { }

  ngOnInit(): void {
    this.quizService.quizzes().subscribe(
      (data: any) => {
        this.quizzes = data;
        console.log(data);
      }, (err) => {
        this.toast.error("Server Error!",err.message);
      }
    );
  }


  deleteQuiz(qid){

      Swal.fire({
        icon: 'info',
         title: 'Are you sure?',
        confirmButtonText: 'Delete',
        showCancelButton: true
      }).then((res) => {
        if(res.isConfirmed){
          this.quizService.deleteQuiz(qid).subscribe(data => { 
            this.quizzes = this.quizzes.filter((quiz) => quiz.qid != qid);
            Swal.fire('Success', 'Quiz Deleted!', 'success');
           }, (err) => {
            this.toast.error("Server Error!");
           });
        }
      })
    
  }

}
