import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()

export class UserService {
  constructor(private tokenService: TokenService) {}

  getUser(): Observable<User> {
    return this.tokenService.getAccessToken()
      .pipe(
        map((token) => {
          return JSON.parse(atob(token.split('.')[1])) as User;
        })
      );
  }
}