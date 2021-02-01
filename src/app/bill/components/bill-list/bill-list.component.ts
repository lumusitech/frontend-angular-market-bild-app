import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/product/interfaces/product';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.sass']
})
export class BillListComponent implements OnInit {

  @Input() costList: Product[];
  @Input() total: number;
  @Output() rmProductEvent: EventEmitter<Product>
  @Input() quantity: number;

  constructor() {
    this.costList = [];
    this.total = 0;
    this.rmProductEvent = new EventEmitter();
    this.quantity = 0;
  }

  ngOnInit(): void {
  }

  onClick(product: Product): void {
    this.rmProductEvent.emit(product);
  }

}
