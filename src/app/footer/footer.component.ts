import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
ProductService
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
products: any[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

 
}
