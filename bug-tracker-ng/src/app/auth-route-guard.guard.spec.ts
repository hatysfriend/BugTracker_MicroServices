import { TestBed } from '@angular/core/testing';

import { AuthRouteGuardGuard } from './auth-route-guard.guard';

describe('AuthRouteGuardGuard', () => {
  let guard: AuthRouteGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthRouteGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
