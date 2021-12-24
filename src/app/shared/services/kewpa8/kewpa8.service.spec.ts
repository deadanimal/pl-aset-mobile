import { TestBed } from '@angular/core/testing';

import { Kewpa8Service } from './kewpa8.service';

describe('Kewpa8Service', () => {
  let service: Kewpa8Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kewpa8Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
