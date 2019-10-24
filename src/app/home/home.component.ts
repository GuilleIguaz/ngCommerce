import { Component, OnInit, Input } from '@angular/core';
import { PRODUCTS } from '../data/products';
import { ProductsService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = PRODUCTS;
  addedProducts = [];
  countGR1 = 1;
  countSR1 = 1;
  countCF1 = 1;

  // creamos variables count y le asignamos valor numérico, modificamos ese valor con incrementos y decrementos y cuando añadimos al carrito le pasamos ese valor a la cantidad del producto dentro de addedProducts

  constructor(
              public productsService: ProductsService,
              public router : Router
            ) { }

  ngOnInit() {
    // return products from service on init
    this.addedProducts = this.productsService.getCart();
  }

  addToCart(product) {
    // asignamos cada counter a su correspondiente product
    if(product.id == 'GR1'){
      this.productsService.addToCart(product, this.countGR1);
    }else if(product.id == 'SR1'){
      this.productsService.addToCart(product, this.countSR1);
    }else{
      this.productsService.addToCart(product, this.countCF1);
    }
  }

  incrementAmount(product){
    if(product.id === 'GR1'){
      this.countGR1++;
    }else if(product.id === 'SR1'){
      this.countSR1++;
    }else{
      this.countCF1++;
    }
  }

  decrementAmount(product){
    if(product.id === 'GR1'){
      if(this.countGR1 === 1){
        return;
      }
      this.countGR1--;
    }else if(product.id === 'SR1'){
      if(this.countSR1 === 1){
        return;
      }
      this.countSR1--;
    }else{
      if(this.countCF1 === 1){
        return;
      }
      this.countCF1--;
    }
  }

  deleteProduct(product){
    this.productsService.deleteProduct(product);
  }

  specialOffer(product){
    this.productsService.specialOffer(product);
  }
  
}
