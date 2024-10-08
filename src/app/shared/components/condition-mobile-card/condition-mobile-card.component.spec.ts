import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionMobileCardComponent } from './condition-mobile-card.component';

describe('ConditionMobileCardComponent', () => {
  let component: ConditionMobileCardComponent;
  let fixture: ComponentFixture<ConditionMobileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionMobileCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionMobileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
