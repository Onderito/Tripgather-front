import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyMytripComponent } from './empty-mytrip.component';

describe('EmptyMytripComponent', () => {
  let component: EmptyMytripComponent;
  let fixture: ComponentFixture<EmptyMytripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyMytripComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyMytripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
