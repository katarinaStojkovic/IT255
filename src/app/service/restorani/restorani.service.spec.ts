import { TestBed, inject } from '@angular/core/testing';

import { RestoraniService } from './restorani.service';

describe('RestoraniService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestoraniService]
    });
  });

  it('should be created', inject([RestoraniService], (service: RestoraniService) => {
    expect(service).toBeTruthy();
  }));
});
