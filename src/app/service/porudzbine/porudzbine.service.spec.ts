import { TestBed, inject } from '@angular/core/testing';

import { PorudzbineService } from './porudzbine.service';

describe('PorudzbineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PorudzbineService]
    });
  });

  it('should be created', inject([PorudzbineService], (service: PorudzbineService) => {
    expect(service).toBeTruthy();
  }));
});
