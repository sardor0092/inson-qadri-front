import { TestBed } from '@angular/core/testing';

import { MahallaService } from './mahalla.service';

describe('MahallaService', () => {
  let service: MahallaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MahallaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
