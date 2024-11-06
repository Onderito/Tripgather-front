import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormeventService {

  constructor() { }

  private dataSubject = new BehaviorSubject<any>(null);
  public data$ = this.dataSubject.asObservable();
  
  private scaleSubject = new BehaviorSubject<number>(1); // Initialize with scale 1
  public scale$ = this.scaleSubject.asObservable(); // Observable to subscribe to scale changes

  nextStep() {
    let currentScale = this.scaleSubject.getValue();
    this.scaleSubject.next(currentScale + 1); // Increment scale and notify subscribers
  }

  getScale(): number {
    return this.scaleSubject.getValue(); // Return the current scale
  }


  setData(newData: any) {
    const currentData = this.dataSubject.getValue();
    this.dataSubject.next({ ...currentData, ...newData });
  }

  clearData() {
    this.dataSubject.next(null);
  }
}
