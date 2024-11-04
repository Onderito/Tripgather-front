import { Injectable } from '@angular/core';
import { City } from '../interface/city.js';



@Injectable({
  providedIn: 'root'
})
export class CountryService {
    async getCities(): Promise<City[]> {  // Indiquer que la promesse retourne un tableau de City[]
      const cities = await import('cities.json');
      return cities.default as City[];  // Assurez-vous que les données sont de type City[]
    }
  }
