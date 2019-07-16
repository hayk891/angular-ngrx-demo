import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from './redux/app.state';
import { Car } from './car.model';
import { AddCar, UpdateCar, DeleteCar, LoadCars } from './redux/cars.action';

@Injectable({providedIn: 'root'})
export class CarsService {

  static BASE_URL = 'http://localhost:3000/';
  constructor(private http: HttpClient, private store: Store<AppState>) {

  }

  preloadCars() {
    return this.http.get(CarsService.BASE_URL + 'cars');
  }

  loadCars(): void {
    this.http.get(CarsService.BASE_URL + 'cars')
      .toPromise()
      .then((cars: Car[]) => {
        this.store.dispatch(new LoadCars(cars));
      });
  }

  addCar(car: Car) {
    console.log(car);
    this.http.post(CarsService.BASE_URL + 'cars', car)
      .toPromise()
      .then((car: Car) => this.store.dispatch(new AddCar(car)));
  }

  deleteCar(car: Car) {
    this.http.delete(CarsService.BASE_URL + 'cars/' + car.id)
      .toPromise()
      .then(() => {
        this.store.dispatch(new DeleteCar(car));
      });
  }

  updateCar(car: Car) {
    this.http.put(CarsService.BASE_URL + 'cars/' + car.id, car)
      .toPromise()
      .then((car: Car) => {
        this.store.dispatch(new UpdateCar(car));
      });
  }
}
