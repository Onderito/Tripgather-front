import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PRIMENG } from '../../../../primeNgImport.js';

interface CardState {
  isGreenBorder: boolean;
  isClicked: boolean;
}

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
  cardStates: CardState[] = [];

  @Output() clikedCategory: EventEmitter<any> = new EventEmitter();
  @Input() data: any;

  ngOnInit() {
    // Initialize card states with default values
    this.cardStates = this.data.map(() => ({
      isGreenBorder: false,
      isClicked: false,
    }));
  }

  toggleBorder(index: number) {
    this.cardStates[index].isGreenBorder = !this.cardStates[index].isGreenBorder;
  }

  sendCategory(ctgy: any, index: number) {
    this.cardStates[index].isClicked = !this.cardStates[index].isClicked;
    this.clikedCategory.emit(ctgy);
  }
}