import { Component } from '@angular/core';
import { FormeventService } from '../../../core/service/formevent.service.js';

@Component({
  selector: 'app-final-step',
  standalone: true,
  imports: [],
  templateUrl: './final-step.component.html',
  styleUrl: './final-step.component.scss'
})
export class FinalStepComponent {
  receivedData : any
constructor(private formEvent : FormeventService) {}

  ngOnInit() {
    this.formEvent.data$.subscribe(data => {
      this.receivedData = data;
      console.log(this.receivedData);
    });
  }
}
