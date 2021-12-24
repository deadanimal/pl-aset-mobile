import { TestBed } from '@angular/core/testing';

import { Kewpa10aService } from './kewpa10a.service';

describe('Kewpa10aService', () => {
  let service: Kewpa10aService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kewpa10aService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
