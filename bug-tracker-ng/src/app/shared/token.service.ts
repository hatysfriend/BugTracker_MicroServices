import { Injectable } from '@angular/core';
import { from, Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()

export class TokenService {
  TokenKey = "accessToken";
  RefreshKey = "refreshToken";

  accessToken:string;
  refreshToken:string;

  constructor(private http: HttpClient, private router: Router) { }

  setAccessToken(accessToken: string): void {
    localStorage.setItem(this.TokenKey, accessToken);
  }

  setRefreshToken(refreshToken: string): void {
    localStorage.setItem(this.RefreshKey, refreshToken);
  }

  getAccessToken(): Observable<string> {
    const token = localStorage.getItem(this.TokenKey);
    if(!token) {
      this.router.navigate(['auth/login']);
      return throwError(new Error("No Access Token Available"));
    }

    return from(this.checkAccessToken(token));
  }

  getRefreshToken(): string {
    return localStorage.getItem(this.RefreshKey);
  }

  deleteTokens(): void {
    localStorage.clear();
  }

  checkAccessToken(accessToken: string): Observable<string> {
    const isTokenExpired = this.checkAccessTokenIsExpired(accessToken);
    if(!isTokenExpired) {
      return of(accessToken);
    }
    
    console.log("Getting Refresh...");
    return this.getRefreshedToken();
  }

  checkAccessTokenIsExpired = (jwt: string) => {
    const data = JSON.parse(atob(jwt.split('.')[1]));
    if (data.exp < new Date().getTime()/1000) {
      return true;
    }
    return false;
  }; 

  getRefreshedToken(): Observable<string> {
    const refreshToken = localStorage.getItem(this.RefreshKey);
    if(!refreshToken) {
      this.router.navigate(['auth/login']);
      return throwError(new Error("No Refresh Token Available"));
    }

    return this.http.post<any>('http://localhost:3002/auth/token', { 
      token: refreshToken 
    }).pipe(
      map((data) => {
        this.setAccessToken(data.accessToken);
        return data.accessToken
      }),
      catchError(() => this.router.navigate(['auth/login']))
    );
  }
}