import { Injectable } from '@angular/core';
import { City } from '../interface/city.js';



@Injectable({
  providedIn: 'root'
})
export class CountryService {
    async getCities(): Promise<City[]> {  
      const cities = await import('cities.json');
      return cities.default as City[]; 
    }
  }
