import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MainCardComponent } from '../../shared/components/main-card/main-card.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/utils/button/button.component';
import { EmptyTripComponent } from '../../shared/components/empty-data/empty-trip/empty-trip.component';
import { UserService } from '../../core/service/user.service';

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
  instances = Array(3);
  search: FormGroup;
  noData: boolean = false;

  constructor(private fb: FormBuilder, private Route: Router,private userService : UserService) {
    // Initialisez le formulaire dans le constructeur
    this.search = this.fb.group({
      city: [''],
      state: [''],
      sexe: [''],
      start: [''],
      back: [''],
    });
  }

  onChangeRoute(url: string) {
    this.Route.navigate([url]);
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  ngOnInit() {
    this.userService.getOneUser().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
