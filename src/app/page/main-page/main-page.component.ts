import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MainCardComponent } from '../../shared/components/main-card/main-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MainCardComponent, CommonModule],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  public eventData: any[] = [];
  instances = Array(3);
  search: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialisez le formulaire dans le constructeur
    this.search = this.fb.group({
      city: [''],
      state: [''],
      sexe: [''],
      start: [''],
      back: ['']
    });
  }
}
