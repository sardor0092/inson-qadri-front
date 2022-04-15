import { TestBed } from '@angular/core/testing';

import { TasharizaService } from './tashariza.service';

describe('TasharizaService', () => {
  let service: TasharizaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasharizaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
