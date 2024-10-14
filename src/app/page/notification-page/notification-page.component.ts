import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-page',
  standalone: true,
  imports: [],
  templateUrl: './notification-page.component.html',
  styleUrl: './notification-page.component.scss'
})
export class NotificationPageComponent {

    pseudo: string = '';
    vacances: string = '';

    ngOnInit(): void {
      this.pseudo = 'azy Ontest',
      this.vacances = 'Australie, séjour en moto';
    }

}
