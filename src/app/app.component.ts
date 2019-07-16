import { Component, OnInit } from '@angular/core';
import { Car } from './car.model';
import { Store } from '@ngrx/store';
import { AppState } from './redux/app.state';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public carsState: Observable<AppState>;

  constructor(private store: Store<{cars: Car[]}>) {

  }

  ngOnInit(): void {
    this.carsState = this.store.select('carPage');
  }
}

