import { Component, Input, OnInit} from '@angular/core';
import { Car } from '../car.model';
import { AppState } from '../redux/app.state';
import { Store } from '@ngrx/store';
import { UpdateCar, DeleteCar } from '../redux/cars.action';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input() car: Car;
  constructor(private store: Store<AppState>, private carsService: CarsService) {
  }

  ngOnInit() {
  }

  onDelete() {
    this.carsService.deleteCar(this.car);
  }

  onBuy() {
    this.car.isSold = true;
    this.carsService.updateCar(this.car);
  }

}
