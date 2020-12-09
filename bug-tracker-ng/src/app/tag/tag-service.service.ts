import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { switchMap, mergeMap } from 'rxjs/operators';
import { Tag } from '../models/tag';
import { AuthHeaderService } from './../shared/auth-header.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BugService } from './../bugs/bug.service';

@Injectable({
  providedIn: 'root'
})
export class TagServiceService {
  private BaseUrl = 'http://localhost:3002/tags';
  private tagAction$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private authHeaderService: AuthHeaderService, private http: HttpClient, private bugService: BugService) { }

  tags$ = combineLatest([
    this.tagAction$.asObservable()
  ]).pipe(
    switchMap((bugId) => {
      return this.authHeaderService.getAuthHeader()
        .pipe(
          switchMap((header) => {
            return this.http.get<Tag[]>(`${this.BaseUrl}/${bugId}/tag`,
              {
                headers: new HttpHeaders(header)
              });
          })
        )
    })
  )

  addTag(bugId: string, tag: Tag): Observable<any> {
    return this.authHeaderService.getAuthHeader()
      .pipe(
        switchMap((header) => {
          return this.http.post<any>(`${this.BaseUrl}/${bugId}/tag`, {
            tag: tag
          },
            {
              headers: new HttpHeaders(header)
            });
        }),
        mergeMap(() => {
          this.updateTagData(bugId);
          return of(true);
        })
      )
  }

  deleteTag(bugId: string, tagId: string): Observable<any> {
    return this.authHeaderService.getAuthHeader()
      .pipe(
        switchMap((header) => {
          return this.http.delete<any>(`${this.BaseUrl}/${bugId}/tag/${tagId}`,
            {
              headers: new HttpHeaders(header)
            });
        }),
        mergeMap(() => {
          this.updateTagData(bugId);
          return of(true);
        })
      )
  }

  updateTagData(bugId) {
    this.tagAction$.next(bugId);
    this.bugService.updateBugData();
  }
}
