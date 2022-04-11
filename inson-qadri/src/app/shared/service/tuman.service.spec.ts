import { TestBed } from '@angular/core/testing';

import { TumanService } from './tuman.service';

describe('TumanService', () => {
  let service: TumanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TumanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
