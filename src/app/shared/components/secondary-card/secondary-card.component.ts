import { Component } from '@angular/core';
import { CategoryCardComponent } from '../category-card/category-card.component';
import { ConditionMobileCardComponent } from '../condition-mobile-card/condition-mobile-card.component';
import { ConditionDesktopCardComponent } from '../condition-desktop-card/condition-desktop-card.component';

@Component({
  selector: 'app-secondary-card',
  standalone: true,
  imports: [
    CategoryCardComponent,
    ConditionMobileCardComponent,
    ConditionDesktopCardComponent,
  ],
  templateUrl: './secondary-card.component.html',
  styleUrl: './secondary-card.component.scss',
})
export class SecondaryCardComponent {}
