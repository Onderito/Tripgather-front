import { Component } from '@angular/core';
import { SteponeComponent } from "../../shared/components/create-event/stepone/stepone.component";
import { SteptwoComponent } from "../../shared/components/create-event/steptwo/steptwo.component";
import { FinalStepComponent } from "../../shared/components/create-event/final-step/final-step.component";
import { CommonModule } from '@angular/common';
import { FormeventService } from '../../core/service/formevent.service.js';

@Component({
  selector: 'app-createevent-page',
  standalone: true,
  imports: [SteponeComponent, SteptwoComponent, FinalStepComponent,CommonModule],
  templateUrl: './createevent-page.component.html',
  styleUrl: './createevent-page.component.scss'
})
export class CreateeventPageComponent {
  scale: number = 1; // Initialisation par défaut

  constructor(private formService: FormeventService) {
    // Abonnement à l'observable du service pour réagir aux changements de `scale`
    this.formService.scale$.subscribe((value: number) => {
      this.scale = value;
    });
  }
  receiveScale() {
    this.scale += 1;
  }
  

}
