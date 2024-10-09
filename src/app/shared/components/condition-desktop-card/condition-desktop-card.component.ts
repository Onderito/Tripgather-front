import { Component } from '@angular/core';
import { ConditionCardDataService } from '../../../core/service/condition-card-data.service';

@Component({
  selector: 'app-condition-desktop-card',
  standalone: true,
  imports: [],
  templateUrl: './condition-desktop-card.component.html',
  styleUrl: './condition-desktop-card.component.scss',
})
export class ConditionDesktopCardComponent {
  constructor(public conditionData: ConditionCardDataService) {}
}
