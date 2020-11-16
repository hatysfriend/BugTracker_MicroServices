import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap, tap } from 'rxjs/operators';
import { Observable, BehaviorSubject, combineLatest, Subject } from 'rxjs';
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
    switchMap((luben) => {
      return this.authHeaderService.getAuthHeader().pipe(
        switchMap((token) => {
          return this.http.get<CommentResponse[]>(`${this.BaseUrl}/${luben}/comments/getAll`, {
            headers: new HttpHeaders(token)
          })
        })
      );
    })
  )

  addComment(bugId: string, comment: CommentRequest): Observable<any> {
    return this.authHeaderService.getAuthHeader().pipe(
      switchMap((token) => {
        return this.http.post<any>(`${this.BaseUrl}/${bugId}/comments/add`, comment, {
          headers: new HttpHeaders(token)
        })
      })
    );
  };

  updateCommentData(bugId) {
    this.updateAction$.next(bugId);
  }
}