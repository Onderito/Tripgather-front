import { TestBed } from '@angular/core/testing';
import { FormatedFormService } from './formated-form.service';
import { provideHttpClient } from '@angular/common/http';

describe('FormatedFormService', () => {
  let service: FormatedFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(FormatedFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
