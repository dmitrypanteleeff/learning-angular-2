import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  clearAllFlag: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  addObj(addItem: Ingredient) {
    console.log('addItem', addItem)
    this.ingredients.push(addItem)
  }

  deleteObj(deleteItem: Ingredient) {
    this.ingredients = this.ingredients.filter(itemArr => (itemArr.name !== deleteItem.name && itemArr.amount != deleteItem.amount))
    console.log('deleteItem',deleteItem)
  }

  clearArr(item: boolean) {
    this.clearAllFlag = item;
    if (this.clearAllFlag) {
      this.ingredients = [];
      this.clearAllFlag = false;
    }
  }

}
