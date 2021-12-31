import { TestBed } from '@angular/core/testing';

import { Kewpa21Service } from './kewpa21.service';

describe('Kewpa21Service', () => {
  let service: Kewpa21Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kewpa21Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
