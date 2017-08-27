import { Component, OnInit } from '@angular/core';
import { Product } from '../service/product/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product = new Product();
  constructor() { }

  add(){
    console.log(this.product);
  }
  ngOnInit() {
  }

}
