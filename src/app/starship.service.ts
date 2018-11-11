import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SWAPIStarship } from 'src/app/interfaces/swapi-starship.interface';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  constructor(private httpClient: HttpClient) { }

  getStarshipList(url: string): Observable<SWAPIStarship> {
    return this.httpClient.get(url || 'https://swapi.co/api/starships/') as Observable<SWAPIStarship>;
  }

  getAmountOfStops(MGLT: string, totalMGLT: number, consumables: string): number {
    debugger;
    if (MGLT != 'unknown' && consumables != 'unknown') {
      return totalMGLT / parseInt(MGLT) / this.getHoursFromConsumables(consumables);
    } else {
      return -1;
    }
  }

  getHoursFromConsumables(consumables: string): number {
    if (consumables.includes('day')) {
      return parseInt(consumables.slice(0, consumables.indexOf(' '))) * 24;
    } else if (consumables.includes('week')) {
      return parseInt(consumables.slice(0, consumables.indexOf(' '))) * 168;
    } else if (consumables.includes('month')) {
      return parseInt(consumables.slice(0, consumables.indexOf(' '))) * 731;
    } else if (consumables.includes('year')) {
      return parseInt(consumables.slice(0, consumables.indexOf(' '))) * 8766;
    }

    return 0;
  }
}


