import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-category-component',
  standalone: true,
  imports: [],
  templateUrl: './products-category-component.component.html',
  styleUrl: './products-category-component.component.css'
})
export class ProductsCategoryComponentComponent implements OnInit {
  categoryId: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.categoryId = params['categoryId'];
    });
  }
}

