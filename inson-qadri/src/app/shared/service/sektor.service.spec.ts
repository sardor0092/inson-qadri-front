import { TestBed } from '@angular/core/testing';

import { SektorService } from './sektor.service';

describe('SektorService', () => {
  let service: SektorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SektorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
