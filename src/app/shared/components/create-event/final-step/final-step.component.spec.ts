import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { FinalStepComponent } from './final-step.component';

describe('FinalStepComponent', () => {
  let component: FinalStepComponent;
  let fixture: ComponentFixture<FinalStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalStepComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(FinalStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
