import { TestBed } from '@angular/core/testing';

import { TashkilotService } from './tashkilot.service';

describe('TashkilotService', () => {
  let service: TashkilotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TashkilotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
