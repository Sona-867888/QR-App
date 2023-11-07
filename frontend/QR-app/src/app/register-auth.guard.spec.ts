import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { registerAuthGuard } from './register-auth.guard';

describe('registerAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => registerAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
