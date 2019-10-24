import { Component, OnInit } from '@angular/core';
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
  // countGR1 = 1;
  // countSR1 = 1;
  // countCF1 = 1;

  // creamos variables count para cada product y le asignamos 1, modificamos ese valor con incrementos y decrementos y cuando añadimos al carrito le pasamos ese valor a la cantidad del producto dentro de addedProducts

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
      this.productsService.addToCart(product);
    }else if(product.id == 'SR1'){
      this.productsService.addToCart(product);
    }else{
      this.productsService.addToCart(product);
    }
  }

  incrementAmount(product){
    if(product.id === 'GR1'){
      product.counter++;
    }else if(product.id === 'SR1'){
      product.counter++;
    }else{
      product.counter++;
    }
  }

  decrementAmount(product){
    if(product.counter === 1){
      return;
    }
    product.counter--;
    // if(product.id === 'GR1'){
    //   if(product.count === 1){
    //     return;
    //   }
    //   this.countGR1--;
    // }else if(product.id === 'SR1'){
    //   if(this.countSR1 === 1){
    //     return;
    //   }
    //   this.countSR1--;
    // }else{
    //   if(this.countCF1 === 1){
    //     return;
    //   }
    //   this.countCF1--;
    // }
  }

  deleteProduct(product){
    this.productsService.deleteProduct(product);
  }

  specialOffer(product){
    if(product.id == 'GR1'){
      this.productsService.specialOfferGR1(product);
    }else if(product.id == 'SR1'){
      this.productsService.specialOfferSR1(product);
    }else{
      this.productsService.specialOfferCF1(product);
    }  
  }
  
}