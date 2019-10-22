import { Injectable } from '@angular/core';

import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  checkUser(user: User) {
    return user.username === 'admin' && user.password === '123';
  }
}
