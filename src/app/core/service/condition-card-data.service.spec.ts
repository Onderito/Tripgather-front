import { TestBed } from '@angular/core/testing';

import { ConditionCardDataService } from './condition-card-data.service';

describe('ConditionCardDataService', () => {
  let service: ConditionCardDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConditionCardDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
