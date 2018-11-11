import { Component, OnChanges, Input } from '@angular/core';
import { Starship } from '../interfaces/starship.interface';
import { StarshipService } from '../starship.service';

@Component({
  selector: 'starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnChanges, Starship {

  name: string;
  consumables: string;
  MGLT: string;
  amountOfStopsForResupply = 0;

  @Input() APIResponse: Starship;
  @Input() totalMGLT: number;

  constructor(private starshipService: StarshipService) { }

  ngOnChanges() {
    this.name = this.APIResponse.name;
    this.amountOfStopsForResupply = this.starshipService.getAmountOfStops(
      this.APIResponse.MGLT,
      this.totalMGLT,
      this.APIResponse.consumables);
  }

}
