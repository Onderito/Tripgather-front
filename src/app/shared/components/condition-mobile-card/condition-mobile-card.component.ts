import { Component } from '@angular/core';
import { ConditionCardDataService } from '../../../core/service/condition-card-data.service';

@Component({
  selector: 'app-condition-mobile-card',
  standalone: true,
  imports: [],
  templateUrl: './condition-mobile-card.component.html',
  styleUrl: './condition-mobile-card.component.scss',
})
export class ConditionMobileCardComponent {
  constructor(public conditionData: ConditionCardDataService) {}
}
