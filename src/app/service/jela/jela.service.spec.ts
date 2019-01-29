import { TestBed, inject } from '@angular/core/testing';

import { JelaService } from './jela.service';

describe('JelaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JelaService]
    });
  });

  it('should be created', inject([JelaService], (service: JelaService) => {
    expect(service).toBeTruthy();
  }));
});
