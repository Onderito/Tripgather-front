import { Injectable } from '@angular/core';
import cities from 'cities.json';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  country : any = cities
  getCities() {
    return this.country;
  }
}
