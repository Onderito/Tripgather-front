import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionDesktopCardComponent } from './condition-desktop-card.component';

describe('ConditionDesktopCardComponent', () => {
  let component: ConditionDesktopCardComponent;
  let fixture: ComponentFixture<ConditionDesktopCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionDesktopCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionDesktopCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
