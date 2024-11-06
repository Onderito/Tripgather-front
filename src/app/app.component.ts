import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PRIMENG } from '../primeNgImport';
import { FooterComponent } from './layout/footer/footer.component';
import { NotificationPageComponent } from './page/notification-page/notification-page.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { MainCardComponent } from './shared/components/main-card/main-card.component';
import { EventHeaderComponent } from './shared/components/event-header/event-header.component';
import { MainPageComponent } from './page/main-page/main-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PRIMENG,
    FooterComponent,
    NotificationPageComponent,
    NavBarComponent,
    MainCardComponent,
    EventHeaderComponent,
    MainPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tripgather-front';
}
