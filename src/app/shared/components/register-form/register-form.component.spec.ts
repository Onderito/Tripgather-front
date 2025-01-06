import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistercompComponent } from './register-form.component';

describe('RegistercompComponent', () => {
  let component: RegistercompComponent;
  let fixture: ComponentFixture<RegistercompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistercompComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
