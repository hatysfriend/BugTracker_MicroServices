import { Injectable } from '@angular/core';
import { AuthHeaderService } from '../../shared/auth-header.service';
import { Observable, Subject, combineLatest, BehaviorSubject } from 'rxjs';
import { Bug } from '../../models/bug';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';


@Injectable()
export class BugService {
  private BaseUrl = 'http://localhost:3002/bugs';

  private updateAction$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private authHeaderService: AuthHeaderService, private http: HttpClient) { }

  bugs$ = combineLatest([
    this.updateAction$.asObservable()
  ]).pipe(
    switchMap(() => {
      return this.authHeaderService.getAuthHeader()
        .pipe(
          switchMap((header) => {
            return this.http.get<Bug[]>(`${this.BaseUrl}/getAll`, {
              headers: new HttpHeaders(header)
            });
          }),
        )
    })
  );

  getBugById(id: string): Observable<Bug> {
    return this.authHeaderService.getAuthHeader()
      .pipe(
        switchMap((header) => {
          return this.http.get<Bug>(`${this.BaseUrl}/getById/${id}`, {
            headers: new HttpHeaders(header)
          });
        })
      );
  }

  updateBug(bugId: string, bug: any): Observable<any> {
    return this.authHeaderService.getAuthHeader()
      .pipe(
        switchMap((header) => {
          return this.http.patch(`${this.BaseUrl}/update/${bugId}`, bug, {
            headers: new HttpHeaders(header)
          });
        })
      );
  }

  updateBugData() {
    this.updateAction$.next(null);
  }
}