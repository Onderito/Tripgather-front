import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-request',
  standalone: true,
  imports: [],
  templateUrl: './notification-request.component.html',
  styleUrl: './notification-request.component.scss',
})
export class NotificationRequestComponent {
  pseudo: string = '';
  vacances: string = '';

  ngOnInit(): void {
    (this.pseudo = 'Ulas Önder'), (this.vacances = 'Australie, séjour en moto');
  }
}
