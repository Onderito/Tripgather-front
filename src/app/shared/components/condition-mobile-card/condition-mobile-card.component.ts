import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-condition-mobile-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './condition-mobile-card.component.html',
  styleUrl: './condition-mobile-card.component.scss',
})
export class ConditionMobileCardComponent {
  female: string = 'assets/imgs/female.svg';
  calendar: string = 'assets/imgs/calendar-check.svg';
  money: string = 'assets/imgs/money-bag.svg';
  users: string = 'assets/imgs/users.svg';

  @Input()
  conditionData: {
    dateRange: string;
    travelType: string;
    priceRange: string;
    places: string;
  } = {
    dateRange: '11/07/2024 au 17/07/2024',
    travelType: 'voyage entre filles',
    priceRange: '500€ - 1500€',
    places: '12 places',
  };

  constructor() {}
}
