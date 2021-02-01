import { Injectable } from '@angular/core';
import { ProductType } from '../enums/type.enum';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];

  constructor() {
    this.products = [
      { name: "Paella", cost: 250, img: "../../../assets/img/paella.jpg", type: ProductType.food, quantity: 0 },
      { name: "Ravioles", cost: 250, img: "../../../assets/img/ravioles.jpg", type: ProductType.food, quantity: 0 },
      { name: "Asado", cost: 350, img: "../../../assets/img/asado.jpg", type: ProductType.food, quantity: 0 },
      { name: "Pizza", cost: 300, img: "../../../assets/img/pizza.jpg", type: ProductType.food, quantity: 0 },
      { name: "Empanada", cost: 80, img: "../../../assets/img/empanadas.jpg", type: ProductType.food, quantity: 0 },
      { name: "Milanesa", cost: 150, img: "../../../assets/img/milanesas.jpg", type: ProductType.food, quantity: 0 },
      { name: "Coca-cola", cost: 60, img: "../../../assets/img/coca-cola.jpg", type: ProductType.drink, quantity: 0 },
      { name: "Aquarius", cost: 50, img: "../../../assets/img/aquarius.jpg", type: ProductType.drink, quantity: 0 },
      { name: "Cerveza", cost: 80, img: "../../../assets/img/cerveza.jpg", type: ProductType.drink, quantity: 0 }
    ];
  }

  getProducts(): Product[] {
    return this.products;
  }
}
