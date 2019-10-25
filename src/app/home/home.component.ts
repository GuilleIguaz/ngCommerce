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

  constructor(
              public productsService: ProductsService,
              public router : Router
            ) { }

  ngOnInit() {
    // return products from service on init
    this.addedProducts = this.productsService.getCart();
  }

  addToCart(product) {
    if(product.id == 'GR1'){
      this.productsService.addToCart(product);
    }else if(product.id == 'SR1'){
      this.productsService.addToCart(product);
    }else{
      this.productsService.addToCart(product);
    }
  }

  incrementAmount(product){
      product.counter++;
  }

  decrementAmount(product){
    if(product.counter === 1){
      return;
    }
    product.counter--;
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