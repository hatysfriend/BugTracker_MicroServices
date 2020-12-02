import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from 'src/app/shared/user.service';
import { BugService } from '../index-bug';

import { BugEntryComponent } from './bug-entry.component';

describe('BugEntryComponent', () => {
  let component: BugEntryComponent;
  let fixture: ComponentFixture<BugEntryComponent>;
  let mockBugService: jasmine.SpyObj<BugService>;
  let mockUserService: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    mockBugService = jasmine.createSpyObj(['getBugById', 'updateBug','addBug', 'updateBugData']);
    mockUserService = jasmine.createSpyObj(['getUser']);

    await TestBed.configureTestingModule({
      declarations: [ BugEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(async () => {
    mockBugService = jasmine.createSpyObj(['getBugById', 'updateBug','addBug', 'updateBugData']);

    await TestBed.configureTestingModule({
      declarations: [ BugEntryComponent ],
      providers: [
        { provide: BugService, useValue: mockBugService },
        { provide: UserService, useValue: mockUserService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
