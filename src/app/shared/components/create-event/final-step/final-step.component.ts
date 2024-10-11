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
  fakeData : any = {
    "title": "coucou",
    "start": "Fri Oct 11 2024 00:00:00 GMT+0200 (heure d'été d'Europe centrale)",
    "back": "Sat Oct 12 2024 00:00:00 GMT+0200 (heure d'été d'Europe centrale)",
    "budget": 3,
    "country": {
      "admin1": "10",
      "admin2": "38098",
      "country": "AR",
      "displayName": "Tumbaya (AR)",
      "lat": "-23.85814",
      "lng": "-65.46704",
      "name": "Tumbaya"
    },
    "editorContent": "<p>couc</p>",
    "gender": "Femme",
    "nbMember": 2,
    "selectedCategories": [
      {
        "category": "music",
        "color": "rgba(255, 0, 0, 0.1)"
      },
      {
        "category": "art & culture",
        "color": "rgba(0, 0, 255, 0.1)"
      },
      {
        "category": "social activities",
        "color": "rgba(0, 128, 0, 0.1)"
      }
    ],
    "url": "couc"
  }
  @Input() scale : number = 0


constructor(private formEvent : FormeventService) {}

  ngOnInit() {
    this.formEvent.data$.subscribe(data => {
      this.receivedData = data;
      console.log(this.receivedData);
    });
  }
}
