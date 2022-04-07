import { TestBed } from '@angular/core/testing';

import { UserRouteAccess.GuardService } from './user-route-access.guard.service';

describe('UserRouteAccess.GuardService', () => {
  let service: UserRouteAccess.GuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRouteAccess.GuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
