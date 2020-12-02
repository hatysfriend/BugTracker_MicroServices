import { Component, Input, OnInit } from '@angular/core';
import { CommentResponse } from './../../models/commentResponseModel';
import { CommentService } from './../comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: CommentResponse;
  @Input() bugId: string;
  isEditable: boolean = false;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
  }

  handleDelete() {
    this.commentService.deleteComment(this.bugId, this.comment._id).subscribe();
  }

  handleEdit() {
    this.isEditable = true;
  }

  editComment() {
    const comment = {
      comment: this.comment.comment
    }
    this.commentService.updateComment(this.bugId, this.comment._id, comment).subscribe();
  }
}
