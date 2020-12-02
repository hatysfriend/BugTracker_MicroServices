import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BugService } from 'src/app/bugs/index-bug';
import { UserService } from 'src/app/shared/user.service';
import { CommentService } from '../comment.service';

import { CommentEntryComponent } from './comment-entry.component';
import { of } from 'rxjs';
import { User } from 'src/app/models/user';

describe('CommentEntryComponent', () => {
  let component: CommentEntryComponent;
  let fixture: ComponentFixture<CommentEntryComponent>;
  let mockCommentService: jasmine.SpyObj<CommentService>;
  let mockUserService: jasmine.SpyObj<UserService>;
  let mockBugService: jasmine.SpyObj<BugService>;

  beforeEach(async () => {
    mockBugService = jasmine.createSpyObj<BugService>(['getBugById', 'updateBug','addBug', 'updateBugData']);
    mockUserService = jasmine.createSpyObj<UserService>(['getUser']);
    mockCommentService = jasmine.createSpyObj<CommentService>(['addComment', 'deleteComment', 'updateComment', 'updateCommentData'], ['allComments$']);

    await TestBed.configureTestingModule({
      declarations: [ CommentEntryComponent ],
      providers: [
        { provide: BugService, useValue: mockBugService },
        { provide: UserService, useValue: mockUserService },
        { provide: CommentService, useValue: mockCommentService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    mockUserService.getUser.and.returnValue(of());
    fixture = TestBed.createComponent(CommentEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
