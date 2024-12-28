import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../models/product';

@Component({
  selector: 'app-form-product-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Changed FormsModule to ReactiveFormsModule
  templateUrl: './form-product-component.component.html',
  styleUrl: './form-product-component.component.css'
})
export class FormProductComponentComponent {
  productForm: FormGroup;
  listProducts: Product[] = [];

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]*')]],
      image: [''],
      categoryId: [null, Validators.required],
      description: [''],
      price: [null, [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]],
      brand: [''],
      promotion: [null, Validators.pattern('^(0|[1-9][0-9]?)$')]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const newProduct: Product = {
        id: this.listProducts.length + 1,
        ...this.productForm.value
      };
      this.listProducts.push(newProduct);
    }
  }
}


/* Template-driven
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
*/