import { Injectable } from '@angular/core';
import { AuthHeaderService } from './../shared/auth-header.service';
import { Observable } from 'rxjs';
import { Bug } from '../models/bug';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class BugService {
  private BaseUrl = 'http://localhost:3002/bugs';

  constructor (private authHeaderService: AuthHeaderService, private http: HttpClient) {}

  getAllBugs(): Observable<any> {
    return this.authHeaderService.getAuthHeader()
      .pipe(
        switchMap((header) => {
          return this.http.get<Bug[]>(`${this.BaseUrl}/getAll`, {
            headers: new HttpHeaders(header)
          });
        }),
      )
  }

  updateBug(bugId: string, bug: any): Observable<any> {
    return this.authHeaderService.getAuthHeader()
      .pipe(
        switchMap((header) => {
          return this.http.patch(`${this.BaseUrl}/update/${bugId}`,bug , {
            headers: new HttpHeaders(header)
          });
        })
      );
  }
}