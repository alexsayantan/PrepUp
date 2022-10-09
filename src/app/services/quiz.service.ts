import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http: HttpClient) { }

  //get quiz from server
  public quizzes() {
    return this._http.get(`${baseUrl}/quiz/`);
  }

  //add quiz to server
  public addQuiz(quiz) {
    return this._http.post(`${baseUrl}/quiz/`, quiz);
  }

  //delete quiz from server
  public deleteQuiz(qid) {
    return this._http.delete(`${baseUrl}/quiz/${qid}`);
  }
}
