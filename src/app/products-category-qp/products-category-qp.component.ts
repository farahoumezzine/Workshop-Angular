import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-category-qp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-category-qp.component.html',
  styleUrl: './products-category-qp.component.css'
})
export class ProductsCategoryQPComponent implements OnInit {
  categoryId: number = 0;
  filteredProducts: Product[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.categoryId = +params['categoryId'];
      this.filterProducts();
    });
  }

  filterProducts() {
    this.filteredProducts = this.listProducts.filter(
      product => product.categoryId === this.categoryId
    );
  }

  listProducts: Product[] = [
    {"id":1, "name":"Refrigérateur LGInox", "image":"assets/images/refrigerateur-lg.jpg", "categoryId":1,
    "description":"", "price":2800, "brand":"LG", "promotion":0},
    {"id":2, "name":"Refrigérateur SamsungBlanc", "image":"assets/images/refrigerateur_samsung.jpg", "categoryId":1,
    "description":"", "price":2400, "brand":"Samsung", "promotion":0},
    {"id":3, "name":"Lave vaisselle Beko", "image":"assets/images/lave_vaisselle.jpg", "categoryId":1,
    "description":"", "price":1875, "brand":"BEKO", "promotion":0},
    {"id":4, "name":"Oppo SmartPhone", "image":"assets/images/oppo_smart.jpg", "categoryId":4,
    "description":"", "price":1200, "brand":"OPPO", "promotion":0},
    {"id":5, "name":"Hachoir", "image":"assets/images/hachoir.jpg", "categoryId":2,
    "description":"", "price":120, "brand":"Moulinex", "promotion":0},
    {"id":6, "name":"TV 50''LG", "image":"assets/images/tv_lg.jpg", "categoryId":5,
    "description":"", "price":1800, "brand":"LG", "promotion":0}
  ]
}
