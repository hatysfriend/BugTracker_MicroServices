import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BugModalStateService } from 'src/app/bug-modal-state.service';
import { Bug } from 'src/app/models/bug';
import { BugCardComponent } from './bug-card.component';

describe('BugCardComponent', () => {
  let component: BugCardComponent;
  let fixture: ComponentFixture<BugCardComponent>;
  let mockModalStateService: jasmine.SpyObj<BugModalStateService>;

  beforeEach(async () => {
    mockModalStateService = jasmine.createSpyObj<BugModalStateService>(['openModal']);

    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ BugCardComponent ],
      providers: [ { provide: BugModalStateService, useValue: mockModalStateService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    const bug: Bug = {
      _id: 'test',
      name: 'test',
      status: 'test',
      author: 'test',
      comments: []
    };
    fixture = TestBed.createComponent(BugCardComponent);
    component = fixture.componentInstance;
    component.bug = bug;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
