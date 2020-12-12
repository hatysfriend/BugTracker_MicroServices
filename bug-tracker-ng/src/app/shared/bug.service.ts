import { Injectable } from '@angular/core';
import { Observable, combineLatest, BehaviorSubject, of } from 'rxjs';
import { Bug } from '../models/bug';
import { HttpClient } from '@angular/common/http';
import { switchMap, mergeMap } from 'rxjs/operators';

@Injectable()
export class BugService {
  private BaseUrl = 'http://localhost:3002/bugs';

  private updateAction$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private http: HttpClient) { }

  bugs$ = combineLatest([
    this.updateAction$.asObservable()
  ]).pipe(
    switchMap(() => {
      return this.http.get<Bug[]>(`${this.BaseUrl}/getAll`);
    }),
  );

  getBugById(id: string): Observable<Bug> {
    return this.http.get<Bug>(`${this.BaseUrl}/getById/${id}`);
  };

  updateBug(bugId: string, bug: any): Observable<any> {
    return this.http.patch(`${this.BaseUrl}/update/${bugId}`, bug);
  }

  addBug(bug: any): Observable<any> {
    return this.http.post(`${this.BaseUrl}/add`, { bug: bug }).pipe(
      mergeMap(() => {
        this.updateAction$.next(null);
        return of(true);
      })
    );
  }

  updateBugData() {
    this.updateAction$.next(null);
  }
}