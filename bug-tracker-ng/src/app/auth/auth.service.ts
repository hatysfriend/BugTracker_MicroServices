import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TokenResponse } from '../models/tokenResponse';
import { TokenService } from './../shared/token.service';

@Injectable()

export class AuthService {
  private BaseUrl = 'http://localhost:3002/auth';

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  loginUser(user: User): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.BaseUrl}/login`, { 
      username: user.username, 
      password: user.password 
    })
      .pipe(
        map((res) => {
          this.tokenService.setAccessToken(res.accessToken);
          this.tokenService.setRefreshToken(res.refreshToken);
          return res;
        }),
        catchError((err) => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  logoutUser(): Observable<any> {
    return this.http.post<any>(`${this.BaseUrl}/logout`, this.tokenService.getRefreshToken())
      .pipe(
        map((data) => {
          this.tokenService.deleteTokens();
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