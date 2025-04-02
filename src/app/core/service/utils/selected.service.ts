import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedService {
  private eventDataSource = new BehaviorSubject<any>(null); // Valeur initiale nulle
  currentEventData = this.eventDataSource.asObservable(); // Observable pour écouter les changements

  constructor() {}

  changeEventData(data: any) {
    this.eventDataSource.next(data);
  }
}
