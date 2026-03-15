import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment.prod';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/usermodel';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  private baseUrl = `${environment.apiUrl}/User`;

  constructor(private http: HttpClient) { }

  getUserProfile(id: number) {
    return this.http.get<UserModel>(`${this.baseUrl}/${id}`);
  }
  
  updateProfile(formData: FormData) {
    return this.http.post(`${this.baseUrl}/updateProfile`, formData);
  }
}
