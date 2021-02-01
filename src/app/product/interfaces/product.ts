import { ProductType } from "../enums/type.enum";

export interface Product {
  name: string;
  cost: number;
  img: string;
  type: ProductType;
  quantity: number;
}
