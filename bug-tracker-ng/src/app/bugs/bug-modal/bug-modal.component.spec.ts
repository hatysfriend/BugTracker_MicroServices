import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BugModalComponent } from './bug-modal.component';
import { BugService } from './../bug.service';
import { BugModalStateService } from 'src/app/bug-modal-state.service';
import { UserService } from 'src/app/shared/user.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('BugModalComponent', () => {
  let component: BugModalComponent;
  let fixture: ComponentFixture<BugModalComponent>;
  let mockBugService: jasmine.SpyObj<BugService>;
  let mockModalService: jasmine.SpyObj<BugModalStateService>;
  let mockUserService: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    mockBugService = jasmine.createSpyObj(['getBugById', 'updateBug','addBug', 'updateBugData']);
    mockModalService = jasmine.createSpyObj(['getModalState', 'openModal', 'closeModal']);
    mockUserService = jasmine.createSpyObj(['getUser']);

    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([]) ],
      declarations: [ BugModalComponent ],
      providers: [
        { provide: BugService, useValue: mockBugService },
        { provide: BugModalStateService, useValue: mockModalService },
        { provide: UserService, useValue: mockUserService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugModalComponent);
    component = fixture.componentInstance;
    history.pushState('test', 'bugId');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getBugs()', () => {
    component.ngOnInit();
    expect(mockBugService.getBugById).toHaveBeenCalled();
    fixture.detectChanges();
  })
});
