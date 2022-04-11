import { TestBed } from '@angular/core/testing';

import { ArizaService } from './ariza.service';

describe('ArizaService', () => {
  let service: ArizaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArizaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
