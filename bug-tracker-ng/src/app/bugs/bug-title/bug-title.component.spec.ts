import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BugService } from '../bug.service';

import { BugTitleComponent } from './bug-title.component';
import { Bug } from './../../models/bug';

describe('BugTitleComponent', () => {
  let component: BugTitleComponent;
  let fixture: ComponentFixture<BugTitleComponent>;
  let mockBugService: jasmine.SpyObj<BugService>;

  beforeEach(async () => {
    mockBugService = jasmine.createSpyObj(['getBugById', 'updateBug','addBug', 'updateBugData']);

    await TestBed.configureTestingModule({
      declarations: [ BugTitleComponent ],
      providers: [{ provide: BugService, useValue: mockBugService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    const bug: Bug = {
      name: 'test',
      author: 'test',
      status: 'test'
    };
    fixture = TestBed.createComponent(BugTitleComponent);
    component = fixture.componentInstance;
    component.bug = bug;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
