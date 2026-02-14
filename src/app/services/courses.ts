import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../components/models/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private baseUrl = 'https://smartcertify-api.azurewebsites.net/api';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl + '/courses');
  }
}