import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { SteponeComponent } from './stepone.component';

describe('SteponeComponent', () => {
  let component: SteponeComponent;
  let fixture: ComponentFixture<SteponeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteponeComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(SteponeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
