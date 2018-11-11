import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StarshipService } from './starship.service';

describe('StarshipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [StarshipService]
    });
  });

  it('should get hours from consumables days', inject([StarshipService], (service: StarshipService) => {
    expect(service.getHoursFromConsumables('4 days')).toEqual(96);
  }));

  it('should get hours from consumables weeks', inject([StarshipService], (service: StarshipService) => {
    expect(service.getHoursFromConsumables('2 weeks')).toEqual(336);
  }));

  it('should get hours from consumables months', inject([StarshipService], (service: StarshipService) => {
    expect(service.getHoursFromConsumables('5 months')).toEqual(3655);
  }));

  it('should get hours from consumables years', inject([StarshipService], (service: StarshipService) => {
    expect(service.getHoursFromConsumables('1 year')).toEqual(8766);
  }));

  it('should calculate the amount o stops', inject([StarshipService], (service: StarshipService) => {
    const totalMGLT = 1000000;

    const yWing = {
      MGLT: '80',
      consumables: '1 week'
    }
    expect(service.getAmountOfStops(yWing.MGLT, totalMGLT, yWing.consumables)
    .toFixed()).toEqual('74');

    const millenniumFalcon = {
      MGLT: '75',
      consumables: '2 months'
    }
    expect(service.getAmountOfStops(millenniumFalcon.MGLT, totalMGLT, millenniumFalcon.consumables)
    .toFixed()).toEqual('9');

    const rebelTransport = {
      MGLT: '20',
      consumables: '6 months'
    }
    expect(service.getAmountOfStops(rebelTransport.MGLT, totalMGLT, rebelTransport.consumables)
    .toFixed()).toEqual('11');
  }));

  it('should output -1 if some parameter is missing', inject([StarshipService], (service: StarshipService) => {
    const totalMGLT = 1000000;

    const unknownWing = { MGLT: '80', consumables: 'unknown' };
    expect(service.getAmountOfStops(unknownWing.MGLT, totalMGLT, unknownWing.consumables)).toEqual(-1);
    
    const unknownWing2 = { MGLT: 'unknown', consumables: '6 months' };
    expect(service.getAmountOfStops(unknownWing2.MGLT, totalMGLT, unknownWing2.consumables)).toEqual(-1);

  }));
});
