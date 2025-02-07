import { Component } from '@angular/core';
import { EmptyNotificationComponent } from '../../shared/components/empty-data/empty-notification/empty-notification.component';
import { CommonModule } from '@angular/common';
import { CreateEventService } from '../../core/service/create-event.service';
import { UserService } from '../../core/service/user.service';
import { DetailEventComponent } from "../../shared/components/detail-event/detail-event.component";
import { CategoryCardComponent } from "../../shared/components/category-card/category-card.component";

@Component({
  selector: 'app-notification-page',
  standalone: true,
  imports: [
    EmptyNotificationComponent,
    CommonModule,
    DetailEventComponent,
    CategoryCardComponent
],
  templateUrl: './notification-page.component.html',
  styleUrl: './notification-page.component.scss',
})
export class NotificationPageComponent {

  userId : number = 0
  events : any;

  constructor(
    private eventService : CreateEventService,
    private userService : UserService
  ) {}

  notification: string = 'assets/icons/notification.svg';
  noData: boolean = false;
  ngOnInit() {
    this.userService.getUser().subscribe((user) => {
      this.userId = user.id      
    })
    if(this.userId > 0) {
      this.eventService.getEventById(this.userId).subscribe((event) => {
        this.events = event
        console.log(this.events, 'this.events')
      })
    } 
  }
}
