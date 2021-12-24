import { TestBed } from '@angular/core/testing';

import { Kewpa10bService } from './kewpa10b.service';

describe('Kewpa10bService', () => {
  let service: Kewpa10bService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kewpa10bService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
