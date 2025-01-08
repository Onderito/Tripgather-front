import { Component, Input } from '@angular/core';
import { DetailEventComponent } from '../detail-event/detail-event.component';
import { CategoryCardComponent } from '../category-card/category-card.component';
import { ButtonComponent } from '../utils/button/button.component';
import { CommonModule } from '@angular/common';
import { SelectedService } from '../../../core/service/utils/selected.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [DetailEventComponent, CategoryCardComponent, ButtonComponent,CommonModule],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.scss',
})
export class MainCardComponent {
 @Input() cardData : any;

 constructor(private selectedService : SelectedService,private route : Router) {}

 test(event : any, url :string) {
  this.selectedService.changeEventData(event)
  this.route.navigate([url]);
  console.log(event);
 }
}
