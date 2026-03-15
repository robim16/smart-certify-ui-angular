import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment.prod';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { QuestionDto } from '../models/question';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private baseUrl = `${environment.apiUrl}/questions`;

  constructor(private http: HttpClient, private loginService: LoginService) { }

  saveQuestionChoice(question: QuestionDto): Observable<any> {
    return this.http.post(`${this.baseUrl}/CreateQuestionChoices`, question);
  }

  updateQuestionChoice(question: QuestionDto): Observable<any> {
    return this.http.put(`${this.baseUrl}/UpdateQuestionChoicesAndChoices/${question.questionId}`, question);
  }

  getQuestions(): Observable<QuestionDto[]> {
    return this.http.get<QuestionDto[]>(`${this.baseUrl}`)
  }

  deleteQuestion(questionId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${questionId}`)
  }

  getQuestionById(id: number) {
    return this.http.get<QuestionDto>(`${this.baseUrl}/${id}`);
  }
}
