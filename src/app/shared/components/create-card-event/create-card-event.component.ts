import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  isGreenBorders: boolean[] = [];
  isClicked : any[] = []

  @Output() clikedCategory: EventEmitter<any> = new EventEmitter();
  @Input() data: any;

  ngOnInit() {
    // Initialiser les états de bordure à 'false' pour chaque carte
    this.isGreenBorders = new Array(this.data.length).fill(false);
  }

  toggleBorder(index: number) {
    // Basculer la valeur de bordure pour l'index correspondant
    this.isGreenBorders[index] = !this.isGreenBorders[index];
  }

  sendCategory(ctgy : any) {
    // Basculer la valeur de bordure pour l'index correspondant
    this.clikedCategory.emit(ctgy) 
   }
}
