import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PRIMENG } from '../../../../primeNgImport';

interface CardState {
  isGreenBorder: boolean;
  isClicked: boolean;
}

@Component({
  selector: 'app-create-card-event',
  standalone: true,
  imports: [PRIMENG],
  templateUrl: './create-card-event.component.html',
  styleUrls: ['./create-card-event.component.scss'],
})
export class CreateCardEventComponent {
  music: string = 'assets/imgs/music-circle.svg';
  angular: string = '/assets/icons/category/angular.svg';
  cardStates: CardState[] = [];

  @Output() clikedCategory: EventEmitter<any> = new EventEmitter();
  @Input() data: any;

  ngOnInit() {
    if (this.data && Array.isArray(this.data)) {
      this.cardStates = this.data.map(() => ({
        isGreenBorder: false,
        isClicked: false,
      }));
    } else {
      console.error('data is undefined or not an array', this.data);
      this.cardStates = [];
    }
  }

  toggleBorder(index: number) {
    this.cardStates[index].isGreenBorder =
      !this.cardStates[index].isGreenBorder;
  }

  sendCategory(ctgy: any, index: number) {
    this.cardStates[index].isClicked = !this.cardStates[index].isClicked;
    this.clikedCategory.emit(ctgy);
  }
}
