import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PRIMENG } from '../primeNgImport';
import { FooterComponent } from './layout/footer/footer.component';
import { SecondaryCardComponent } from './shared/components/secondary-card/secondary-card.component';
import { NotificationPageComponent } from './page/notification-page/notification-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PRIMENG, FooterComponent, SecondaryCardComponent, NotificationPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tripgather-front';
}
