import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormeventService {

  constructor() { }

  private dataSubject = new BehaviorSubject<any>(null);
  public data$ = this.dataSubject.asObservable();
  
  private scaleSubject = new BehaviorSubject<number>(1); 
  public scale$ = this.scaleSubject.asObservable(); 

  nextStep() {
    let currentScale = this.scaleSubject.getValue();
    this.scaleSubject.next(currentScale + 1); 
  }

  getScale(): number {
    return this.scaleSubject.getValue();
  }


  setData(newData: any) {
    const currentData = this.dataSubject.getValue();
    this.dataSubject.next({ ...currentData, ...newData });
  }

  clearData() {
    this.dataSubject.next(null);
  }
}
