import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthMessagingService } from '../auth-messaging.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuthMessagingService: jasmine.SpyObj<AuthMessagingService>;

  beforeEach(async () => {
    mockAuthMessagingService = spyOnAllFunctions<AuthMessagingService>(new AuthMessagingService);

    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        { provide: AuthMessagingService, useValue: mockAuthMessagingService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
