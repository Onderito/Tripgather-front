import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class FormatedFormService {
  constructor() {}

  objToString(obj: Object) {
    let str = '';
    for (const [p, val] of Object.entries(obj)) {
      str += `${val}`;
    }
    return str;
  }

  formattedDate(date: Date): string | null {
    return new DatePipe('en-US').transform(date, 'dd.MM.yyyy'); // Retourne la date formatée
  }
}
