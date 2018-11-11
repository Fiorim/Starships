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
    return this.httpClient.get(url || 'https://swapi.co/api/starships/') as Observable<SWAPIStarship>
  }

  getAmountOfStops(MGLT: number, totalMGLT: number, consumables: string): number{
    return totalMGLT / MGLT / this.getHoursFromConsumables(consumables);
  }

  private getHoursFromConsumables(consumables: string): number {
    if (consumables.includes('day')) {
      return parseInt(consumables.slice(0, consumables.indexOf(' '))) * 24;
    }
    else if (consumables.includes('week')) {
      return parseInt(consumables.slice(0, consumables.indexOf(' '))) * 24 * 7;
    }
    else if (consumables.includes('month')) {
      return parseInt(consumables.slice(0, consumables.indexOf(' '))) * 24 * 30;
    }
    else if (consumables.includes('year')) {
      return parseInt(consumables.slice(0, consumables.indexOf(' '))) * 24 * 365;
    }
    
    return 0;
  }
}


