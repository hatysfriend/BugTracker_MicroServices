import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFlashMsgComponent } from './auth-flash-msg.component';

describe('AuthFlashMsgComponent', () => {
  let component: AuthFlashMsgComponent;
  let fixture: ComponentFixture<AuthFlashMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthFlashMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthFlashMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
