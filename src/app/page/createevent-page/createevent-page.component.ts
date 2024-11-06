import { Component } from '@angular/core';
import { SteponeComponent } from '../../shared/components/create-event/stepone/stepone.component';
import { SteptwoComponent } from '../../shared/components/create-event/steptwo/steptwo.component';
import { FinalStepComponent } from '../../shared/components/create-event/final-step/final-step.component';
import { CommonModule } from '@angular/common';
import { FormeventService } from '../../core/service/formevent.service.js';
import { NavBarComponent } from '../../layout/nav-bar/nav-bar.component';
import { EventHeaderComponent } from '../../shared/components/event-header/event-header.component';

@Component({
  selector: 'app-createevent-page',
  standalone: true,
  imports: [
    SteponeComponent,
    SteptwoComponent,
    FinalStepComponent,
    CommonModule,
    NavBarComponent,
    EventHeaderComponent,
  ],
  templateUrl: './createevent-page.component.html',
  styleUrl: './createevent-page.component.scss',
})
export class CreateeventPageComponent {
  scale = 1;

  constructor(private formService: FormeventService) {
    this.formService.scale$.subscribe((value: number) => {
      this.scale = value;
    });
  }
}
