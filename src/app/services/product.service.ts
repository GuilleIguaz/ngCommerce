import { Injectable } from '@angular/core';
import { PRODUCTS } from '../data/products';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

    addedProducts = [];
    products = PRODUCTS;

    constructor(){}

  addToCart(product, counter){
    // amount calcs
    let productToAdd = this.addedProducts.find(function(addedProduct){ 
      if(addedProduct.id === product.id){
        return addedProduct;
      }
    })
    if(productToAdd == undefined){
      product.amount += counter;
      this.addedProducts.push(product);
    }else{
      productToAdd.amount += counter;
    }
    // totalPrice calcs
    for(let j = 0; j < this.addedProducts.length; j++){
      if(this.addedProducts[j].id === 'GR1'){
       this.addedProducts[j].totalPrice = 
        (Math.floor(
         this.addedProducts[j].amount / 2
       ) +
         (this.addedProducts[j].amount % 2)) *
       this.addedProducts[j].price;
      }else if(this.addedProducts[j].id === 'SR1'){
        if(this.addedProducts[j].amount <=3){
       this.addedProducts[j].totalPrice = this.addedProducts[j].amount * this.addedProducts[j].price;
        }else{
         this.addedProducts[j].totalPrice =
         4.5 * this.addedProducts[j].amount;
        }
     }else{
       if(this.addedProducts[j].amount <= 3){
       this.addedProducts[j].totalPrice = this.addedProducts[j].amount * this.addedProducts[j].price;
       }else{
         this.addedProducts[j].totalPrice =
         (2/3) *
         this.addedProducts[j].price *
         this.addedProducts[j].amount;
       }
     }
    }  
  }

  specialOffer(product){
    if(product.id === 'GR1'){
      this.addToCart(product, 2);     
    }else{
      this.addToCart(product, 4);
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