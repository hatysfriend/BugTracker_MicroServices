import { TestBed } from '@angular/core/testing';

import { AuthRouteGuardGuard } from './auth-route-guard.guard';
import { TokenService } from './shared/token.service';

describe('AuthRouteGuardGuard', () => {
  let guard: AuthRouteGuardGuard;
  let mockTokenService: jasmine.SpyObj<TokenService>;

  beforeEach(() => {
    mockTokenService = jasmine.createSpyObj<TokenService>(['getAccessToken']);

    TestBed.configureTestingModule({
      providers: [{ provide: TokenService, useValue: mockTokenService }]
    });
    guard = TestBed.inject(AuthRouteGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
