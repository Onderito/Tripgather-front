import { Component, Input } from '@angular/core';
import { CategoryCardComponent } from '../category-card/category-card.component';
import { ConditionMobileCardComponent } from '../condition-mobile-card/condition-mobile-card.component';
import { ConditionDesktopCardComponent } from '../condition-desktop-card/condition-desktop-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-secondary-card',
  standalone: true,
  imports: [
    CategoryCardComponent,
    ConditionMobileCardComponent,
    ConditionDesktopCardComponent,
    CommonModule
  ],
  templateUrl: './secondary-card.component.html',
  styleUrl: './secondary-card.component.scss',
})
export class SecondaryCardComponent {
  @Input() tripDetail : any;
}
