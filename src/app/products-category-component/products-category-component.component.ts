import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-category-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-category-component.component.html',
  styleUrl: './products-category-component.component.css'
})
export class ProductsCategoryComponentComponent implements OnInit {
  categoryId: number = 0;
  filteredProducts: Product[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.categoryId = +params['categoryId'];// + is used to convert the string to a number
      this.filterProducts();
    });
  }
  filterProducts(){
    this.filteredProducts = this.listProducts.filter(
      product => product.categoryId === this.categoryId
    );
  }
  listProducts : Product[]=[
    {"id":1, "title":"Refrigérateur LG Inox", "image":"assets/images/refrigerateur-lg.jpg", "categoryId":1,
    "description":"2800 dt", "promotion":false, "quantity":10},
    {"id":2, "title":"Refrigérateur Samsung Blanc", "image":"assets/images/refrigerateur_samsung.jpg", "categoryId":1,
    "description":"2400 dt", "promotion":false, "quantity":15},
    {"id":3, "title":"Lave vaisselle Beko", "image":"assets/images/lave_vaisselle.jpg", "categoryId":1,
    "description":"1875 dt", "promotion":false, "quantity":20},
    {"id":4, "title":"Oppo SmartPhone", "image":"assets/images/oppo_smart.jpg", "categoryId":4,
    "description":"1200 dt", "promotion":false, "quantity":25},
    {"id":5, "title":"Hachoir", "image":"assets/images/hachoir.jpg", "categoryId":2,
    "description":"120 dt", "promotion":false, "quantity":30},
    {"id":6, "title":"TV 50''LG", "image":"assets/images/tv_lg.jpg", "categoryId":5,
    "description":"1800 dt", "promotion":false, "quantity":35}
  ]
}

