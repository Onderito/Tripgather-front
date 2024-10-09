import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConditionCardDataService {
  female: string = 'assets/imgs/female.svg';
  calendar: string = 'assets/imgs/calendar-check.svg';
  money: string = 'assets/imgs/money-bag.svg';
  users: string = 'assets/imgs/users.svg';

  constructor() {}
}
