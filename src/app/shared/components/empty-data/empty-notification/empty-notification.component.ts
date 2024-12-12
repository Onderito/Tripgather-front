import { Component } from '@angular/core';

@Component({
  selector: 'app-empty-notification',
  standalone: true,
  imports: [],
  templateUrl: './empty-notification.component.html',
  styleUrl: './empty-notification.component.scss',
})
export class EmptyNotificationComponent {
  bell: string = 'assets/icons/bell.svg';
}
