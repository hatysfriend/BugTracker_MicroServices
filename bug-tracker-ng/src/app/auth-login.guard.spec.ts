import { TestBed } from '@angular/core/testing';
import { AuthLoginGuard } from './auth-login.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { TokenService } from './shared/token.service';

describe('AuthLoginGuard', () => {
  let guard: AuthLoginGuard;
  let mockTokenService: jasmine.SpyObj<TokenService>;

  beforeEach(() => {
    mockTokenService = jasmine.createSpyObj<TokenService>(['getAccessToken']);
    
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      providers: [{ provide: TokenService, useValue: mockTokenService }]
    });
    guard = TestBed.inject(AuthLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
