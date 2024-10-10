import { Component } from '@angular/core';
import { PRIMENG } from '../../../../primeNgImport.js';

@Component({
  selector: 'app-create-card-event',
  standalone: true,
  imports: [PRIMENG],
  templateUrl: './create-card-event.component.html',
  styleUrls: ['./create-card-event.component.scss'] 
})
export class CreateCardEventComponent {
  music: string = 'assets/imgs/music-circle.svg';
  angular: string = '/assets/icons/category/angular.svg';
  isGreenBorder: boolean = false;

  toggleBorder() {
    this.isGreenBorder = !this.isGreenBorder; 
  }
}
