import { Component, OnInit } from '@angular/core';
import { StarshipService } from '../starship.service';

@Component({
  selector: 'starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {

  constructor(private starshipService: StarshipService) { }

  ngOnInit() {
    this.starshipService.getStarshipList().subscribe(response => {
      debugger;
      let x = response.results
    })
  }

}
