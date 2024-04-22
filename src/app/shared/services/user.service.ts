import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment';
import { User } from '../interfaces/user';

const API_URL = `${enviroment.apiURL}/user`;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http: HttpClient = inject(HttpClient);
  registerUser(User: User){
    return this.http.post<{msg:string}>(`${API_URL}/register`, User);
  }
}
