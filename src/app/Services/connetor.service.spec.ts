import { TestBed } from '@angular/core/testing';

import { ConnetorService } from './connetor.service';

describe('ConnetorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnetorService = TestBed.get(ConnetorService);
    expect(service).toBeTruthy();
  });
});
