import { Injectable, OnInit } from '@angular/core';
import { Observable, combineLatest, BehaviorSubject, of } from 'rxjs';
import { Bug } from '../models/bug';
import { HttpClient } from '@angular/common/http';
import { switchMap, mergeMap, tap } from 'rxjs/operators';
import { WorkspaceStateService } from './workspace-state.service';

@Injectable({
  providedIn: 'root'
})
export class BugService implements OnInit {
  private BaseUrl = 'http://localhost:3002/bugs';

  private updateAction$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private http: HttpClient, private workspaceStateService: WorkspaceStateService) { }

  ngOnInit(): void {
    console.log("Bug Componente");
  }

  bugs$ = combineLatest([
    this.updateAction$.asObservable()
  ]).pipe(
    switchMap(() => {
      return this.workspaceStateService.getState()
        .pipe(
          tap(() => console.log("How Many Times?")),
          switchMap((state) => {
            return this.http.get<Bug[]>(`${this.BaseUrl}/${state}/getAll`);
          })
        )
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
    console.log("Refreshing bugs");
    this.updateAction$.next(null);
  }
}