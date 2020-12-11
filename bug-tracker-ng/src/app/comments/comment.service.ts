import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { mergeMap, switchMap } from 'rxjs/operators';
import { Observable, BehaviorSubject, combineLatest, Subject, of } from 'rxjs';
import { AuthHeaderService } from './../shared/auth-header.service';
import { CommentRequest } from '../models/commentRequestModel';
import { CommentResponse } from './../models/commentResponseModel';

@Injectable()
export class CommentService {
  private BaseUrl = 'http://localhost:3002/bugs';

  private updateAction$: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor(private http: HttpClient, private authHeaderService: AuthHeaderService) { }

  allComments$: Observable<CommentResponse[]> = combineLatest([
    this.updateAction$.asObservable()
  ]).pipe(
    switchMap((bugId) => {
      return this.authHeaderService.getAuthHeader().pipe(
        switchMap((header) => {
          return this.http.get<CommentResponse[]>(`${this.BaseUrl}/${bugId}/comments/getAll`, {
            headers: new HttpHeaders(header)
          })
        })
      );
    })
  )

  addComment(bugId: string, comment: CommentRequest): Observable<any> {
    return this.authHeaderService.getAuthHeader().pipe(
      switchMap((header) => {
        return this.http.post<any>(`${this.BaseUrl}/${bugId}/comments/add`, comment, {
          headers: new HttpHeaders(header)
        })
      }),
      mergeMap(() => {
        this.updateAction$.next(bugId);
        return of();
      })
    );
  };

  deleteComment(bugId: string, commentId: string): Observable<any> {
    return this.authHeaderService.getAuthHeader().pipe(
      switchMap((header) => {
        return this.http.delete<any>(`${this.BaseUrl}/${bugId}/comments/delete/${commentId}`, {
          headers: new HttpHeaders(header)
        })
      }),
      mergeMap(() => {
        this.updateAction$.next(bugId);
        return of();
      })
    )
  }

  updateComment(bugId: string, commentId: string, comment: any): Observable<any> {
    return this.authHeaderService.getAuthHeader().pipe(
      switchMap((header) => {
        return this.http.patch<any>(`${this.BaseUrl}/${bugId}/comments/update/${commentId}`, comment, {
          headers: new HttpHeaders(header)
        })
      }),
      mergeMap(() => {
        this.updateAction$.next(bugId);
        return of();
      })
    )
  }

  updateCommentData(bugId) {
    this.updateAction$.next(bugId);
  }
}