import { TestBed } from '@angular/core/testing';

import { ViloyatService } from './viloyat.service';

describe('ViloyatService', () => {
  let service: ViloyatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViloyatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
