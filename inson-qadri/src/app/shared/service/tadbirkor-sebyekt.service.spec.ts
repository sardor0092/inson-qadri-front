import { TestBed } from '@angular/core/testing';

import { TadbirkorSebyektService } from './tadbirkor-sebyekt.service';

describe('TadbirkorSebyektService', () => {
  let service: TadbirkorSebyektService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TadbirkorSebyektService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
