import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { Categorie } from '../models/categorie';
import { CommonModule } from '@angular/common'; /**ngFor directive comes from CommonModule*/
import { FormsModule } from '@angular/forms';
import { FilterCategoryPipe } from '../filter-category.pipe';
import { HighlightDirectiveDirective } from '../highlight-directive.directive';
import { RouterLink } from '@angular/router';
import { DetailsCategoryComponent } from '../details-category/details-category.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CardComponentComponent } from '../card-component/card-component.component';
import { ShortList } from '../models/short-list';
import { ListProductsComponentComponent } from '../list-products-component/list-products-component.component';

@Component({
  selector: 'app-list-categories',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    FilterCategoryPipe, 
    HighlightDirectiveDirective, 
    RouterLink,
    DetailsCategoryComponent,
    RouterModule,
    CardComponentComponent,
    ListProductsComponentComponent
  ],
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.css'
})
export class ListCategoriesComponent implements OnInit, AfterViewInit {
  @ViewChildren(CardComponentComponent) cardComponents!: QueryList<CardComponentComponent>;
  searchTitle: string = '';
  selectedCategory: Categorie | null = null;
  selectedCategoryId: number | null = null;
  shortList: ShortList[] = [];
  private readonly userId = 1; // Example user ID

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Listen to route params to update selected category
    this.route.firstChild?.params.subscribe(params => {
      if (params['id']) {
        const categoryId = +params['id'];
        this.selectedCategoryId = categoryId;
        this.selectedCategory = this.categories.find(c => c.id === categoryId) || null;
      }
    });
  }

  ngAfterViewInit() {
    this.cardComponents.forEach(card => {
      card.btnText = 'Voir produits';
    });
  }

  showDescription(description:string){
    alert(description);
  }

  showDetails(categorie: Categorie) {
    if (this.selectedCategoryId === categorie.id) {
      // If already selected, deselect and navigate back
      this.selectedCategoryId = null;
      this.selectedCategory = null;
      this.router.navigate(['home']);
    } else {
      // Select and navigate to details
      this.selectedCategoryId = categorie.id;
      this.selectedCategory = categorie;
      this.router.navigate(['home', 'details', categorie.id]);
    }
  }

  categories : Categorie[]=[
    {"id":1,"title":"Grand électroménager",
    "image":"assets/images/categorie_electromenager.jpg", "description":"Qualité top",
    "available":true},

    {"id":2,"title":"Petit électroménager",
    "image":"assets/images/categorie_petit_electromenager.jpg", "description":"Tester",
    "available":true},

    {"id":3,"title":"Produits informatiques",
    "image":"assets/images/categorie_produits_informatiques.png", "description":"tester 1234",
    "available":true},

    {"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg",
    "description":"Le nouveau smartphone X est un appareil élégant et performant, doté d'un écran OLED de 6,5 pouces et d'un processeur ultra-rapide", "available":true},

    {"id":5,"title":"TV, images et son",
    "image":"assets/images/categorie_tv_image_son.jpg", "description":"Parfait ",
    "available":true},

    {"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg",
    "description":"Des produits sans sulfate","available":false},

    ]

  addToShortList(categoryId: number) {
    const exists = this.shortList.some(item => 
      item.idUser === this.userId && 
      item.idElement === categoryId && 
      item.typeElement === 'category'
    );

    if (!exists) {
      const shortListItem = {
        id: this.shortList.length + 1,
        idUser: this.userId,
        idElement: categoryId,
        typeElement: 'category'
      };
      this.shortList.push(shortListItem);
      console.log('Added to shortlist:', shortListItem);
    } else {
      console.log('Item already in shortlist');
    }
  }
}