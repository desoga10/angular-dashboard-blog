import { TestBed } from '@angular/core/testing';

import { AfService } from './af.service';

describe('AfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AfService = TestBed.get(AfService);
    expect(service).toBeTruthy();
  });
});
