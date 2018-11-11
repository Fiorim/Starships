import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SWAPIStarship } from 'src/app/interfaces/swapi-starship.interface';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  constructor(private httpClient: HttpClient) { }

  getStarshipList(): Observable<SWAPIStarship> {
    return this.httpClient.get('https://swapi.co/api/starships/') as Observable<SWAPIStarship>
  }

  getAmountOfStops(MGLT: number): number{
    return MGLT * 2;
  }
}


