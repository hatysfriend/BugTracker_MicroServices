import { Component, OnInit, Input } from '@angular/core';
import { faFile, faPaperclip, faComment } from '@fortawesome/free-solid-svg-icons';
import { CommentService } from './../comment.service';
import { UserService } from './../../shared/user.service';
import { CommentRequest } from './../../models/commentRequestModel';
import { BugService } from './../../bugs/bug.service';

@Component({
  selector: 'app-comment-entry',
  templateUrl: './comment-entry.component.html',
  styleUrls: ['./comment-entry.component.scss']
})
export class CommentEntryComponent implements OnInit {
  @Input() bugId: string;
  controlsVisible: boolean = false;
  comment: string;
  hasText: boolean = false;
  userId: string;

  faFile = faFile;
  faPaperclip = faPaperclip;
  faComment = faComment;

  constructor(private commentService: CommentService, private userService: UserService, private bugService: BugService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      this.userId = user.id;
    })
  }

  showControls() {
    this.controlsVisible = true;
  }

  hideControls() {
    this.controlsVisible = false;
    this.comment = '';
  }

  saveComment() {
    this.controlsVisible = false;

    const comment: CommentRequest = {
      comment: this.comment,
      date: new Date(),
      user: this.userId
    };

    this.commentService.addComment(this.bugId, comment).subscribe();
    this.bugService.updateBugData();
    this.comment = '';
  }

  saveDisabled() {
    if(!this.comment) {
      return true;
    }
    return this.comment.trim().length === 0;
  }
}
