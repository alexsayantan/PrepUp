import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  getActiveQuizzesAndCategory(catId: number) {
    throw new Error('Method not implemented.');
  }
  getActiveQuizesAndCategory //get quiz quiz of category
    (catId: number) {
      throw new Error('Method not implemented.');
  }

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

  //get the single quiz from server
  public getQuiz(qid) {
    return this._http.get(`${baseUrl}/quiz/${qid}`);
  }

  //update a single quiz
  public updateQuiz(quiz){
    return this._http.put(`${baseUrl}/quiz/`, quiz);
  }

  //get quizzes from category
  public getQuizzesOfCategory(id) {
    return this._http.get(`${baseUrl}/quiz/category/${id}`);
  }

  //get active quizzes
  public getActiveQuizzes() {
    return this._http.get(`${baseUrl}/quiz/active`);
  }

  //get quiz quiz of category
  public getActiveQuizzesOfCategory(id){
    return this._http.get(`${baseUrl}/quiz/category/active/${id}`);
  }
  
}
