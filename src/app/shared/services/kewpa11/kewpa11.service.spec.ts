import { TestBed } from '@angular/core/testing';

import { Kewpa11Service } from './kewpa11.service';

describe('Kewpa11Service', () => {
  let service: Kewpa11Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kewpa11Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
