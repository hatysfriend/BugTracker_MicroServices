import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMessagingComponent } from './user-messaging.component';

describe('UserMessagingComponent', () => {
  let component: UserMessagingComponent;
  let fixture: ComponentFixture<UserMessagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMessagingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMessagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
