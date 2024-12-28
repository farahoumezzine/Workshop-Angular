import { Component } from '@angular/core';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-product-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-product-component.component.html',
  styleUrl: './form-product-component.component.css'
})
export class FormProductComponentComponent {
  product: Product = {
    id: 0,
    name: '',
    image: '',
    categoryId: null,
    description: '',
    price: null,
    brand: '',
    promotion: null
  };
  listProducts: Product[] = [];

  onSubmit() {
    if (this.product.name && this.product.categoryId && this.product.price) {
      this.product.id = this.listProducts.length + 1;
      this.listProducts.push({...this.product});
      this.product = {
        id: 0,
        name: '',
        image: '',
        categoryId: null,
        description: '',
        price: null,
        brand: '',
        promotion: null
      };
    }
  }
}
