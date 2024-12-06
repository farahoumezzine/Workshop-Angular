import { Component } from '@angular/core';
import { Categorie } from '../models/categorie';
import { CommonModule } from '@angular/common'; /**ngFor directive comes from CommonModule*/
import { FormsModule } from '@angular/forms';
import { FilterCategoryPipe } from '../filter-category.pipe';
import { HighlightDirectiveDirective } from '../highlight-directive.directive';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-list-categories',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterCategoryPipe, HighlightDirectiveDirective, RouterLink],
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.css'
})
export class ListCategoriesComponent {
  searchTitle:string = '';

  showDescription(description:string){
    alert(description);
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
}