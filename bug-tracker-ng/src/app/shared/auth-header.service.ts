import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthHeaderService {

  constructor(private tokenService: TokenService) {}

  getAuthHeader(): Observable<any> {
    return this.tokenService.getAccessToken()
      .pipe(
        map((token) => {
          console.log(JSON.stringify(token));
          return { Authorization: `Bearer ${token}` };
        })
      );
  }
}
