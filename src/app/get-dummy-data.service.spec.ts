import { TestBed, inject } from '@angular/core/testing';

import { GetDummyDataService } from './get-dummy-data.service';

describe('GetDummyDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDummyDataService]
    });
  });

  it('should be created', inject([GetDummyDataService], (service: GetDummyDataService) => {
    expect(service).toBeTruthy();
  }));
});
