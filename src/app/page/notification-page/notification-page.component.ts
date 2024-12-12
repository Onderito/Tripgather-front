import { Component } from '@angular/core';
import { NotificationRequestComponent } from '../../shared/components/notification-request/notification-request.component';
import { EmptyNotificationComponent } from '../../shared/components/empty-data/empty-notification/empty-notification.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification-page',
  standalone: true,
  imports: [
    NotificationRequestComponent,
    EmptyNotificationComponent,
    CommonModule,
  ],
  templateUrl: './notification-page.component.html',
  styleUrl: './notification-page.component.scss',
})
export class NotificationPageComponent {
  notification: string = 'assets/icons/notification.svg';
  noData: boolean = false;
  ngOnInit() {}
}
