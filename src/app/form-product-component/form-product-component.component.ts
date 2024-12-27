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
    categoryId: 0,
    description: '',
    price: 0,
    brand: '',
    promotion: 0
  };
  listProducts: Product[] = [];

  onSubmit() {
    // Generate a new ID (simple increment for demo)
    this.product.id = this.listProducts.length + 1;
    // Add the product to the list
    this.listProducts.push({...this.product});
    // Reset the form
    this.product = {
      id: 0,
      name: '',
      image: '',
      categoryId: 0,
      description: '',
      price: 0,
      brand: '',
      promotion: 0
    };
  }
}
