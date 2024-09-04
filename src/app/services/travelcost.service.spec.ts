import { TestBed } from '@angular/core/testing';

import { TravelcostService } from './travelcost.service';

describe('TravelcostService', () => {
  let service: TravelcostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelcostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
