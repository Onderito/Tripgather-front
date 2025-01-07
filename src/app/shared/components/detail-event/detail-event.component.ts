import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DateformatPipe } from '../../pipe/dateformat.pipe';

@Component({
  selector: 'app-detail-event',
  standalone: true,
  imports: [CommonModule, DateformatPipe],
  templateUrl: './detail-event.component.html',
  styleUrl: './detail-event.component.scss',
})
export class DetailEventComponent {
  @Input() detail: any;
  money: string = 'assets/imgs/money-bag.svg';
  user: string = 'assets/imgs/users.svg';
  calendar: string = 'assets/imgs/calendar-check.svg';
  gender: string = 'assets/imgs/gender.png';

  // book: string = 'assets/imgs/book.svg';
  // gamepad: string = 'assets/imgs/gamepad.svg';
  // music: string = 'assets/imgs/music-circle.svg';
}
