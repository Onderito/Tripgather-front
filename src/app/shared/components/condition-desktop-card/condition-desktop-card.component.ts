import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-condition-desktop-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './condition-desktop-card.component.html',
  styleUrl: './condition-desktop-card.component.scss',
})
export class ConditionDesktopCardComponent {
  @Input() icons: { imgSrc: string }[] = [];
  constructor() {}
}
