import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsListViewComponent } from './participants-list-view.component';

describe('ParticipantsListViewComponent', () => {
  let component: ParticipantsListViewComponent;
  let fixture: ComponentFixture<ParticipantsListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipantsListViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipantsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
