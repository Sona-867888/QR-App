import { TestBed } from '@angular/core/testing';
import { CanActivate } from '@angular/router';
import { AuthGuard } from './auth.guard';


describe('AuthGuard', () => {
  let authGuard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard],
    });

    authGuard = TestBed.inject(AuthGuard); // Inject the AuthGuard
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });
});