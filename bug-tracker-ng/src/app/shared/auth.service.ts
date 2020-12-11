import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TokenResponse } from '../models/tokenResponse';
import { TokenService } from './token.service';
import { LocalStorageService } from './local-storage.service';

@Injectable()

export class AuthService {
  private BaseUrl = 'http://localhost:3002/auth';

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

  loginUser(user: User): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.BaseUrl}/login`, { 
      username: user.username, 
      password: user.password 
    })
      .pipe(
        map((res) => {
          this.localStorageService.setAccessToken(res.accessToken);
          this.localStorageService.setRefreshToken(res.refreshToken);
          return res;
        }),
        catchError((err) => {
          console.log(err+"Login fail");
          return throwError(err);
        })
      );
  }

  logoutUser(): Observable<any> {
    return this.http.post<any>(`${this.BaseUrl}/logout`, this.localStorageService.getRefreshToken())
      .pipe(
        map((data) => {
          this.localStorageService.deleteTokens();
          return data
        })
      )
  }

  registerUser(user: User): Observable<any> {
    console.log(JSON.stringify(user));
    return this.http.post<any>(`${this.BaseUrl}/register`, { 
      username: user.username, 
      password: user.password 
    })
      .pipe(
        catchError((err) => {
          console.log(err);
          return throwError(err);
        })
      );
  }
}