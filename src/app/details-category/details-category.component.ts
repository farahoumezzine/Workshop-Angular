import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Categorie } from '../models/categorie';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details-category',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mt-4">
      <div class="card">
        <div class="card-header">
          <h3>Détails de la catégorie : {{category.title}}</h3>
        </div>
        <div class="card-body">
          <img [src]="category.image" class="img-fluid mb-3" [alt]="category.title">
          <p class="card-text">{{category.description}}</p>
          <p class="card-text">
            <small class="text-muted">
              Statut: {{category.available ? 'Disponible' : 'Non disponible'}}
            </small>
          </p>
        </div>
      </div>
    </div>
  `
})
export class DetailsCategoryComponent {
  @Input() category!: Categorie; // Utilisez l'input pour recevoir la catégorie 
}
