import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import User from 'src/models/User';
import UserModel from 'src/models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  routUrl = `${environment.baseUrl}/user`;
  constructor(public http: HttpClient) { }
  // GetAllUsers(){
  //   return this.get<User[]>(`${this.routUrl}/GetAllUsers`)
  // }
  getUserBytId(id: number) {
    return this.http.get<User>(`${this.routUrl}/${id}`)
  }
  addUser(user: User) {
    return this.http.post<UserModel>(this.routUrl, user);
  }

}
