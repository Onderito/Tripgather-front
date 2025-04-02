import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountUpdatedComponent } from './account-updated.component';

describe('AccountUpdatedComponent', () => {
  let component: AccountUpdatedComponent;
  let fixture: ComponentFixture<AccountUpdatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountUpdatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
