import { TestBed, inject } from '@angular/core/testing';

import { FirstService } from './first.service';

describe('FirstService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirstService]
    });
  });

  it('should ...', inject([FirstService], (service: FirstService) => {
    expect(service).toBeTruthy();
  }));
});
