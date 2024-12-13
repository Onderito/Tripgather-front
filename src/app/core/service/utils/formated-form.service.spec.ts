import { TestBed } from '@angular/core/testing';

import { FormatedFormService } from './formated-form.service';

describe('FormatedFormService', () => {
  let service: FormatedFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatedFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
