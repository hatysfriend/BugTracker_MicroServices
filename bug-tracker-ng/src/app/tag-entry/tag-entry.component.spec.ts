import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagEntryComponent } from './tag-entry.component';

describe('TagEntryComponent', () => {
  let component: TagEntryComponent;
  let fixture: ComponentFixture<TagEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
