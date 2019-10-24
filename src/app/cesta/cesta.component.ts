import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/product.service';
import { PRODUCTS } from '../data/products';


@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {

  products = PRODUCTS;
  addedProducts = [];

  constructor( public productsService: ProductsService ) { }

  ngOnInit() {
    // return products from service on init
    this.addedProducts = this.productsService.getCart();
    }

  deleteProduct(product){
    this.productsService.deleteProduct(product);
  }

  cleanCart(){
    this.productsService.cleanCart();
  }

}
