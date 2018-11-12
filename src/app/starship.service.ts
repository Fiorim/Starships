import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SWAPIStarship } from 'src/app/interfaces/swapi-starship.interface';
import { Hours } from './hours.enum';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  constructor(private httpClient: HttpClient) { }

  getStarshipList(url: string): Observable<SWAPIStarship> {
    const defaultUrl = 'https://swapi.co/api/starships/';
    return this.httpClient.get(url || defaultUrl) as Observable<SWAPIStarship>;
  }

  getAmountOfStops(MGLT: string, totalMGLT: number, consumables: string): number {
    if (MGLT != 'unknown' && consumables != 'unknown') {
      return totalMGLT / parseInt(MGLT) / this.getHoursFromConsumables(consumables);
    } else {
      return -1;
    }
  }

  getHoursFromConsumables(consumables: string): number {
    if (consumables.includes('day')) {
      return parseInt(consumables.slice(0, consumables.indexOf(' '))) * Hours.Day;
    } else if (consumables.includes('week')) {
      return parseInt(consumables.slice(0, consumables.indexOf(' '))) * Hours.Week;
    } else if (consumables.includes('month')) {
      return parseInt(consumables.slice(0, consumables.indexOf(' '))) * Hours.Month;
    } else if (consumables.includes('year')) {
      return parseInt(consumables.slice(0, consumables.indexOf(' '))) * Hours.Year;
    }

    return 0;
  }
}


