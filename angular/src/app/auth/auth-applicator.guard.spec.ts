import { TestBed, async, inject } from '@angular/core/testing';

import { AuthApplicatorGuard } from './auth-applicator.guard';

describe('AuthApplicatorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthApplicatorGuard]
    });
  });

  it('should ...', inject([AuthApplicatorGuard], (guard: AuthApplicatorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
