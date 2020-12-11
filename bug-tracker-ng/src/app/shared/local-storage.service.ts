import { Injectable } from '@angular/core';

@Injectable()

export class LocalStorageService {
  private AccessTokenKey = "accessToken";
  private RefreshTokenKey = "refreshToken";

  accessToken:string;
  refreshToken:string;

  setAccessToken(accessToken: string): void {
    localStorage.setItem(this.AccessTokenKey, accessToken);
  }

  getAccessToken(): string {
    return localStorage.getItem(this.AccessTokenKey);
  }

  setRefreshToken(refreshToken: string): void {
    localStorage.setItem(this.RefreshTokenKey, refreshToken);
  }

  getRefreshToken(): string {
    return localStorage.getItem(this.RefreshTokenKey);
  }

  deleteTokens(): void {
    localStorage.clear();
  }
}