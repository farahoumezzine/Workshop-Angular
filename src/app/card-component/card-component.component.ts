import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-component',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './card-component.component.html',
  styleUrl: './card-component.component.css'
})
export class CardComponentComponent {
  @Input() id!: number;
  @Input() image!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() available!: boolean;
  @Output() addToShortList = new EventEmitter<number>();
  
  public btnText: string = 'Voir produits';

  showDescription() {
    alert(this.description);
  }

  onAddToShortList() {
    this.addToShortList.emit(this.id);
  }
}
