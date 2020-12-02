import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CommentResponse } from 'src/app/models/commentResponseModel';
import { UserService } from 'src/app/shared/user.service';
import { CommentService } from '../comment.service';

import { CommentUpvoteComponent } from './comment-upvote.component';

describe('CommentUpvoteComponent', () => {
  let component: CommentUpvoteComponent;
  let fixture: ComponentFixture<CommentUpvoteComponent>;
  let mockCommentService: jasmine.SpyObj<CommentService>;
  let mockUserService: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    mockUserService = jasmine.createSpyObj<UserService>(['getUser']);
    mockCommentService = jasmine.createSpyObj<CommentService>(['addComment', 'deleteComment', 'updateComment', 'updateCommentData'], ['allComments$']);

    await TestBed.configureTestingModule({
      declarations: [ CommentUpvoteComponent ],
      providers: [
        { provide: UserService, useValue: mockUserService },
        { provide: CommentService, useValue: mockCommentService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    const comment: CommentResponse = {
      _id: 'test',
      comment: 'test',
      user: { 
        username: 'test', 
        password: 'test'
      },
      likes: [{user: 'test'}]
    }; 
    mockUserService.getUser.and.returnValue(of());
    fixture = TestBed.createComponent(CommentUpvoteComponent);
    component = fixture.componentInstance;
    component.comment = comment;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
