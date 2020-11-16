import { Component, Input, OnInit } from '@angular/core';
import { CommentResponse } from './../../models/commentResponseModel';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: CommentResponse;

  faCaretUp = faCaretUp;

  constructor() { }

  ngOnInit(): void {
  }

}
