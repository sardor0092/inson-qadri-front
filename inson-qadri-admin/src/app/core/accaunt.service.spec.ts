import { TestBed } from '@angular/core/testing';

import { AccauntService } from './accaunt.service';

describe('AccauntService', () => {
  let service: AccauntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccauntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
