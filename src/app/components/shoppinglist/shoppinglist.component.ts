import { Component } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrl: './shoppinglist.component.css'
})
export class ShoppinglistComponent {
  items: string[] = [];
  currentItem: string = "";

  show() {
    if (this.currentItem.trim()) {
      this.items.push(this.currentItem.trim());
      this.currentItem = "";
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
