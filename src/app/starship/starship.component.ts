import { Component, OnInit, Input } from '@angular/core';
import { Starship } from '../interfaces/starship.interface';

@Component({
  selector: 'starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit, Starship {

  name: string;
  consumables: string;
  MGLT: string;
  amountOfStopsForResupply: number;

  @Input() APIResponse: Starship;
  @Input() stops: number;

  constructor() { }

  ngOnInit() {
    this.name = this.APIResponse.name;
    this.amountOfStopsForResupply = this.APIResponse.amountOfStopsForResupply;
  }

}
