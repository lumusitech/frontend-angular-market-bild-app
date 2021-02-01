import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {

  products: any[];
  @Output() addProductEvent: EventEmitter<Product>;

  constructor(private productService: ProductService) {
    this.products = productService.getProducts();
    this.addProductEvent = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(product: Product): void {
    this.addProductEvent.emit(product);
  }

}
