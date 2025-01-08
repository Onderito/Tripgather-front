import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MainCardComponent } from '../../shared/components/main-card/main-card.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/utils/button/button.component';
import { EmptyTripComponent } from '../../shared/components/empty-data/empty-trip/empty-trip.component';
import { UserService } from '../../core/service/user.service';
import { CreateEventService } from '../../core/service/create-event.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    MainCardComponent,
    CommonModule,
    ButtonComponent,
    EmptyTripComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  public eventData: any[] = [];
  isDropdownVisible = false;
  instances : any[] = [];
  search: FormGroup;
  noData: boolean = false;

  constructor(private fb: FormBuilder,
     private Route: Router,
     private eventService : CreateEventService
    ) {
    this.search = this.fb.group({
      city: [''],
      state: [''],
      sexe: [''],
      start: [''],
      back: [''],
    });
  }

  // onChangeRoute(event : any) {
  //   // this.Route.navigate([url]);
  //   console.log(event, 'instance event');
  // }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  ngOnInit() {
    this.eventService.getAllEvents().subscribe((data) => {
      this.instances = data;
      this.noData = true
    });
    
  }
}
