import { Component } from '@angular/core';
import { Product } from './product/interfaces/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  costList: Product[];
  total: number;

  constructor() {
    this.costList = [];
    this.total = 0;
  }

  onAddProductEvent($event: Product): void {
    if ($event.quantity === 0) {
      this.costList.push($event);
      $event.quantity++;
      this.total += $event.cost;
    } else {
      $event.quantity++;
      this.total += $event.cost;
    }
  }

  onRmProductEvent($event: Product): void {
    if ($event.quantity === 1) {
      $event.quantity--;
      this.costList = this.costList.filter(item => $event !== item);
      this.total -= $event.cost;
    } else {
      $event.quantity--;
      this.total -= $event.cost;
    }

  }
}


