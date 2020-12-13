import { Injectable } from '@angular/core';

@Injectable()

export class LocalStorageService {
  private AccessTokenKey = "accessToken";
  private RefreshTokenKey = "refreshToken";
  private WorkspaceKey = "workspaceState";

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

  setWorkspaceState(workspaceId: string): void {
    localStorage.setItem(this.WorkspaceKey, workspaceId);
  }

  getWorkspaceState(): string {
    return localStorage.getItem(this.WorkspaceKey);
  }

  deleteTokens(): void {
    localStorage.clear();
  }
}