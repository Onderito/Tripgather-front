import { Component } from '@angular/core';
import { NotificationRequestComponent } from '../../shared/components/notification-request/notification-request.component';

@Component({
  selector: 'app-notification-page',
  standalone: true,
  imports: [NotificationRequestComponent],
  templateUrl: './notification-page.component.html',
  styleUrl: './notification-page.component.scss',
})
export class NotificationPageComponent {
  notification: string = 'assets/icons/notification.svg';
  ngOnInit() {}
}
