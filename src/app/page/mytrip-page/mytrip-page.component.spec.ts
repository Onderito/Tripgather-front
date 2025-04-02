import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytripPageComponent } from './mytrip-page.component';

describe('MytripPageComponent', () => {
  let component: MytripPageComponent;
  let fixture: ComponentFixture<MytripPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MytripPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MytripPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
