import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';
import { CardComponentComponent } from '../card-component/card-component.component';
import { ShortList } from '../models/short-list';

@Component({
  selector: 'app-list-products-component',
  standalone: true,
  imports: [CommonModule, CardComponentComponent],
  templateUrl: './list-products-component.component.html',
  styleUrl: './list-products-component.component.css'
})
export class ListProductsComponentComponent {
  private readonly userId = 1;
  shortList: ShortList[] = [];
  
  listProducts: Product[] = [
    {"id":1,"title":"Cuisinière","image":"assets/images/cuisiniere.jpg", "description":"699 dt", "promotion":false, "quantity":50, "categoryId":1},
    {"id":2,"title":"Réfrigérateur","image":"assets/images/refrigerateur.jpg", "description":"1500 dt", "promotion":false, "quantity":20, "categoryId":1},
    {"id":3,"title":"Robot Pétrin","image":"assets/images/robot_petrin.png", "description":"430 dt", "promotion":false, "quantity":150, "categoryId":2},
    {"id":4,"title":"Fer à repasser", "image":"assets/images/fer_a_repasser.jpg", "description":"130 dt", "promotion":false, "quantity":100, "categoryId":2},
    {"id":5,"title":"Oppo","image":"assets/images/Oppo.png", "description":"920 dt", "promotion":false, "quantity":10, "categoryId":4},
    {"id":6,"title":"TV Téléfunkun", "image":"assets/images/tv1.jpg", "description":"845 dt", "promotion":false, "quantity":50, "categoryId":5}
  ];

  addToShortList(productId: number) {
    const exists = this.shortList.some(item => 
      item.idUser === this.userId && 
      item.idElement === productId && 
      item.typeElement === 'product'
    );

    if (!exists) {
      const shortListItem: ShortList = {
        id: this.shortList.length + 1,
        idUser: this.userId,
        idElement: productId,
        typeElement: 'product'
      };
      this.shortList.push(shortListItem);
      console.log('Added to shortlist:', shortListItem);
    } else {
      console.log('Item already in shortlist');
    }
  }

}
