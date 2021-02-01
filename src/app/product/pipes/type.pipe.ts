import { Pipe, PipeTransform } from '@angular/core';
import { ProductType } from '../enums/type.enum';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(value: Product[], pType: string): Product[] {
    if (pType === undefined) return value;
    return value.filter(item => item.type === pType);
  }
}
