import { Component } from '@angular/core';

@Component({
  selector: 'app-empty-trip',
  standalone: true,
  imports: [],
  templateUrl: './empty-trip.component.html',
  styleUrl: './empty-trip.component.scss',
})
export class EmptyTripComponent {
  locate: string = 'assets/icons/locate.svg';
  compass: string = 'assets/icons/compass.svg';
}
