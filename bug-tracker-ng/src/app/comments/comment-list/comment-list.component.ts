import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from './../comment.service';
import { Observable } from 'rxjs';
import { Bug } from 'src/app/models/bug';
import { CommentResponse } from '../../models/commentResponseModel';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  @Input() bug: Bug
  comments$: Observable<CommentResponse[]>;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    console.log("INIT");
    this.commentService.updateCommentData(this.bug._id);
    this.comments$ = this.commentService.allComments$
  }
}
