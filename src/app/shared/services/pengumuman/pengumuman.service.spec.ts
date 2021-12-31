import { TestBed } from '@angular/core/testing';

import { PengumumanService } from './pengumuman.service';

describe('PengumumanService', () => {
  let service: PengumumanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PengumumanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
