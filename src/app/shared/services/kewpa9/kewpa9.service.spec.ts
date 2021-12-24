import { TestBed } from '@angular/core/testing';

import { Kewpa9Service } from './kewpa9.service';

describe('Kewpa9Service', () => {
  let service: Kewpa9Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kewpa9Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
