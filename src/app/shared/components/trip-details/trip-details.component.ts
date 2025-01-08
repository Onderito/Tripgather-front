import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../utils/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trip-details',
  standalone: true,
  imports: [
    ButtonComponent,
    CommonModule
  ],
  templateUrl: './trip-details.component.html',
  styleUrl: './trip-details.component.scss',
})
export class TripDetailsComponent {
  imgOfTrip: string = '/assets/imgs/homeImg.png';
  imgOfhost: string = '/assets/imgs/Ulas.png';
  @Input() userDetail : any;

}
