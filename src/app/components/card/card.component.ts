import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() event: any;
  @Input() story: any;
  @Input() categories: any[] =  [];

  liked: boolean = false;

  toggleLike() {
    this.liked = !this.liked;
  }
}

