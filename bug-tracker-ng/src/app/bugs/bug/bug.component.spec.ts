import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BugModalStateService } from 'src/app/bug-modal-state.service';
import { UserService } from 'src/app/shared/user.service';
import { BugService } from '../index-bug';

import { BugComponent } from './bug.component';

describe('BugComponent', () => {
  let component: BugComponent;
  let fixture: ComponentFixture<BugComponent>;
  let mockBugService: jasmine.SpyObj<BugService>;
  let mockModalService: jasmine.SpyObj<BugModalStateService>;
  let mockUserService: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    mockBugService = jasmine.createSpyObj<BugService>(['getBugById', 'updateBug','addBug', 'updateBugData']);
    mockModalService = jasmine.createSpyObj<BugModalStateService>(['getModalState', 'openModal', 'closeModal']);
    mockUserService = jasmine.createSpyObj<UserService>(['getUser']);

    await TestBed.configureTestingModule({
      declarations: [ BugComponent ],
      providers: [
        { provide: BugService, useValue: mockBugService },
        { provide: BugModalStateService, useValue: mockModalService },
        { provide: UserService, useValue: mockUserService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    mockBugService.bugs$ = of()
    fixture = TestBed.createComponent(BugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
