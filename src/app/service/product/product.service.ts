import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {
  productList: Product[];
  constructor() { }

  getProducts() {
    return this.productList = [
      { id: 1, imageUrl: '', name: 'fruty', price: 1000 },
      { id: 2, imageUrl: '', name: 'fruty1', price: 2000 },
      { id: 3, imageUrl: '', name: 'fruty2', price: 3000 }
    ];
  }
}
