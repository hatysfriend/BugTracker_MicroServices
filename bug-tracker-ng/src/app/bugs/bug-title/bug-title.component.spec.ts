import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugTitleComponent } from './bug-title.component';

describe('BugTitleComponent', () => {
  let component: BugTitleComponent;
  let fixture: ComponentFixture<BugTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
