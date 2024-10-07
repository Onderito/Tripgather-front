import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormeventService {

  constructor() { }

  private dataSubject = new BehaviorSubject<any>(null);
  public data$ = this.dataSubject.asObservable();

  setData(newData: any) {
    const currentData = this.dataSubject.getValue();
    this.dataSubject.next({ ...currentData, ...newData });
  }

  clearData() {
    this.dataSubject.next(null);
  }
}
