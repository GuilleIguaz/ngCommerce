import { Injectable } from '@angular/core';
import { PRODUCTS } from '../data/products';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

    addedProducts = [];
    products = PRODUCTS;

    constructor(){}

  addToCart(product){
    // counter calcs
    let productToAdd = this.addedProducts.find(function(addedProduct){ 
      if(addedProduct.id === product.id){
        return addedProduct;
      }
    })
    if(productToAdd == undefined){
      product.amount += product.counter;
      this.addedProducts.push(product);
    }else{
      product.amount += product.counter;
    }
    // price calcs
    if(product.id === 'GR1'){
      // reset amount after method
      product.amount -= 2;
      this.specialOfferGR1(product);
    }else if(product.amount <=3){
      product.totalPrice = product.amount * product.price;
    }else{
      if(product.id === 'SR1'){
        // reset
        product.amount -= 4;
        this.specialOfferSR1(product);
      }else{
        // reset
        product.amount -= 4;
        this.specialOfferCF1(product);
     }
    }
  }

  specialOfferGR1(product){
    let productToAdd = this.addedProducts.find(function(addedProduct){ 
      if(addedProduct.id === product.id){
        return addedProduct;
      }
    })
    if(productToAdd == undefined){
      product.amount += 2;
      product.totalPrice = 
        (Math.floor(
         product.amount / 2
       ) +
         (product.amount % 2)) *
       product.price;
    this.addedProducts.push(product);
    }else{
      product.amount += 2;
      product.totalPrice = 
      (Math.floor(
        product.amount / 2
      ) +
        (product.amount % 2)) *
        product.price;
    }
  }
    
  specialOfferSR1(product){
    let productToAdd = this.addedProducts.find(function(addedProduct){ 
      if(addedProduct.id === product.id){
        return addedProduct;
      }
    })
    if(productToAdd == undefined){
      product.amount += 4;
      product.totalPrice =
         4.5 * product.amount;
    this.addedProducts.push(product);
    }else{
      product.amount += 4;
      product.totalPrice =
      4.5 * product.amount;
    }
  }

  specialOfferCF1(product){
    let productToAdd = this.addedProducts.find(function(addedProduct){ 
      if(addedProduct.id === product.id){
        return addedProduct;
      }
    })
    if(productToAdd == undefined){
      product.amount += 4;
      product.totalPrice =
         ((2/3) * product.amount) * product.price;
    this.addedProducts.push(product);
    }else{
      product.amount += 4;
      product.totalPrice = ((2/3) * product.amount) * product.price;
    }
  } 
    
  deleteProduct(product){
    // delete prod from added
    for(let i = 0 ; i < this.addedProducts.length; i++){
      if(this.addedProducts[i].id === product.id){
        this.addedProducts.splice(i, 1);
      }
    }
    // reset product amount
    for(let j = 0 ; j < this.products.length; j++){
      if(this.products[j].id === product.id){
        this.products[j].amount = 0;
      }
    }
  }

  getCart() {
    return this.addedProducts;
  }

  cleanCart(){
    // reset product amount
    for(let j = 0; j < this.products.length; j++){
       this.products[j].amount = 0;
    }
    // remove addedProducts
    this.addedProducts.splice(0, this.addedProducts.length);
  }

}