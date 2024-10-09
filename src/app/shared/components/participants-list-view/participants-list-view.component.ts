import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-participants-list-view',
  standalone: true,
  imports: [],
  templateUrl: './participants-list-view.component.html',
  styleUrl: './participants-list-view.component.scss',
})
export class ParticipantsListViewComponent {
  @Input() img: string = '/assets/imgs/Ulas.png';
  @Input() name: string = 'Ulas Önder';
}
