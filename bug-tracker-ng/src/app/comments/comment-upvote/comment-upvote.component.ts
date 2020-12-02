import { Component, Input, OnInit } from '@angular/core';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { CommentResponse } from './../../models/commentResponseModel';
import { CommentService } from './../comment.service';
import { User } from './../../models/user';
import { UserService } from './../../shared/user.service';

@Component({
  selector: 'app-comment-upvote',
  templateUrl: './comment-upvote.component.html',
  styleUrls: ['./comment-upvote.component.scss']
})
export class CommentUpvoteComponent implements OnInit {
  @Input() comment: CommentResponse;
  @Input() bugId: string;
  user: User;
  isUpvoted: boolean;

  faCaretUp = faCaretUp;

  constructor(private commentService: CommentService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      this.user = user;
    })
  }

  handleUpvote() {
    let likes: {user: string}[];
    const res = this.comment.likes.find(x => x.user === this.user.id);
    
    if (res) {
      likes = this.comment.likes
        .filter(x => x.user !== this.user.id);
      this.isUpvoted = false;       
    }
    else {
      likes = this.comment.likes;
      likes.push({user: this.user.id});
      this.isUpvoted = true;
    }

    const update = {
      likes: likes
    }

    this.commentService.updateComment(this.bugId, this.comment._id, update).subscribe();
  }
}
