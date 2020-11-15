import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugDescComponent } from './bug-desc.component';

describe('BugDescComponent', () => {
  let component: BugDescComponent;
  let fixture: ComponentFixture<BugDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
