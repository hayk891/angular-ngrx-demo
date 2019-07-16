export interface ICar {
  name: string;
  date: string;
  model: string;
  isSold?: boolean;
  id?: number;
}

export class Car {
  name: string;
  date: string;
  model: string;
  isSold?: boolean = false;
  id?: number;

  constructor(options: ICar) {
    for (const item in options) {
      if (item) {
        this[item] = options[item];
      }
    }
  }
}
