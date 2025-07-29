import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // This makes it a singleton
})
export class ProductService {

  constructor() {}

  getProducts() {
    return [
      { id: 1, name: 'Laptop', price: 2500 },
      { id: 2, name: 'Smartphone', price: 1200 },
      { id: 3, name: 'Headphones', price: 150 }
    ];
  }
}