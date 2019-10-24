import { Product } from '../models/product';

export const PRODUCTS: Product[] = [
    {
        id: 'GR1',
        name: 'Green Tea',
        price: 3.11,
        amount: 0,
        totalPrice : 0,
        img: '../../assets/img/te-verde-propiedades.jpg',
        ms: '2x1',
        counter: 1
    },
    {
        id: 'SR1',
        name: 'Strawberries',
        price: 5,
        amount: 0,
        totalPrice : 0,
        img: '../../assets/img/fresas.jpg',
        ms: '3+ 4,50/u',
        counter: 1
    },
    {
        id: 'CF1',
        name: 'Coffee',
        price: 11.23,
        amount: 0,
        totalPrice : 0,
        img: '../../assets/img/coffee.jpg',
        ms: '3+ 33% disc',
        counter: 1 
    }
];