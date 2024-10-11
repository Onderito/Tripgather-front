import { Component, Input } from '@angular/core';
import { FormeventService } from '../../../../core/service/formevent.service.js';

@Component({
  selector: 'app-final-step',
  standalone: true,
  imports: [],
  templateUrl: './final-step.component.html',
  styleUrl: './final-step.component.scss'
})
export class FinalStepComponent {
  receivedData : any
  @Input() scale : number = 0
constructor(private formEvent : FormeventService) {}

  ngOnInit() {
    this.formEvent.data$.subscribe(data => {
      this.receivedData = data;
      console.log(this.receivedData);
    });
  }
}
