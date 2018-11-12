import { Component, ViewEncapsulation } from '@angular/core';
import { StarshipService } from 'src/app/starship.service';
import { Starship } from './interfaces/starship.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent {
  title = 'Starships';
  starshipList: Starship[] = [];
  MGLT: number = 1000000;
  nextPage: string;
  previousPage: string;

  isLoading = true;
  hasError = false;

  constructor(private starshipService: StarshipService) { }

  ngOnInit() {
    this.getStarshipList();
  }

  getStarshipList(url: string = '') {
    this.hasError = false;
    this.isLoading = true;
    this.starshipService.getStarshipList(url).subscribe(response => {
      this.starshipList = response.results;
      this.nextPage = response.next;
      this.previousPage = response.previous;
      this.isLoading = false;
    }, error => {
      this.hasError = true;
      this.isLoading = false;
      console.error(`Server error: ${error}`);
    });
  }

  goToNextPage() {
    this.getStarshipList(this.nextPage);
  }
 
  goToPreviousPage() {
    this.getStarshipList(this.previousPage);
  }

}
