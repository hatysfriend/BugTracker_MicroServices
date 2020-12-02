import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthMessagingService } from '../auth-messaging.service';
import { AuthService } from '../auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterFormComponent } from './register-form.component';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;
  let mockAuthMessagingService: jasmine.SpyObj<AuthMessagingService>;
  let mockAuthService: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    mockAuthMessagingService = spyOnAllFunctions<AuthMessagingService>(new AuthMessagingService);

    mockAuthService = spyOnAllFunctions<AuthService>(AuthService.prototype);

    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ RegisterFormComponent ],
      providers: [
        { provide: AuthMessagingService, useValue: mockAuthMessagingService },
        { provide: AuthService, useValue: mockAuthService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
