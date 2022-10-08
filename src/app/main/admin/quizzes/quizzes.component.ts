import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {

  quizzes = [
    {
      qId: 23,
      title: "Java Series",
      description: "This is Java",
      maxMarks: "100",
      numberOfQuestions: "20",
      active: ""
    },

    {
      qId: 23,
      title: "Java Series",
      description: "This is Java",
      maxMarks: "100",
      numberOfQuestions: "20",
      active: ""
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
