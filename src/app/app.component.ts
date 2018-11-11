import { Component } from '@angular/core';
import { StarshipService } from 'src/app/starship.service';
import { Starship } from './interfaces/starship.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Starships';
  starshipList: Starship[] = [];
  stops: number = 1000000;

  constructor(private starshipService: StarshipService) { }

  ngOnInit() {
    this.starshipService.getStarshipList().subscribe(response => {
      this.starshipList = response.results;
    })
  }

}
