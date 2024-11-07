import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MainCardComponent } from '../../shared/components/main-card/main-card.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MainCardComponent, CommonModule, ButtonComponent],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  public eventData: any[] = [];
  isDropdownVisible = false;
  instances = Array(3);
  search: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialisez le formulaire dans le constructeur
    this.search = this.fb.group({
      city: [''],
      state: [''],
      sexe: [''],
      start: [''],
      back: [''],
    });
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
