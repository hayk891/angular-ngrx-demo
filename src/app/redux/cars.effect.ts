import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CAR_ACTION } from './cars.action';
import { mergeMap, switchMap, tap } from 'rxjs/operators';
import { Car } from '../car.model';
import { CarsService } from '../cars.service';

@Injectable()
export class CarsEffect {


  constructor(private actions$: Actions, private carService: CarsService) {}

  @Effect() loadCars = this.actions$
    .pipe(
      ofType(CAR_ACTION.ADD_CAR),
      tap(() => console.log('effect----')),
      switchMap(() => this.carService.preloadCars()),
      mergeMap((cars: Car[]) => [
        {
          type: CAR_ACTION.LOAD_CARS,
          payload: cars
        },
      ])
    );

}
