import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http: HttpClient) { }

  //get all questions of particular quiz
  public getQuestion(qid) {
    return this._http.get(`${baseUrl}/questions/quiz/all/${qid}`);
  }

  public getQuestionOfQuizForExam(qid) {
    return this._http.get(`${baseUrl}/questions/quiz/${qid}`);
  }

  //post a question to server
  public addQuestion(question) {
    return this._http.post(`${baseUrl}/questions/`, question);
  }

  //delete a question from server
  public deleteQuestion(questionId) {
    return this._http.delete(`${baseUrl}/questions/${questionId}`);
  }

  //eval quiz
  public evalQuiz(questions){
    return this._http.post(`${baseUrl}/questions/eval-quiz`,questions);
  }
}
