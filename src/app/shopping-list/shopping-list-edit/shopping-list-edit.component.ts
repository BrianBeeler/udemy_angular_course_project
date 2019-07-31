import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  constructor() { }

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem(nameInput:HTMLInputElement, amountInput:HTMLInputElement) {
    console.log(typeof amountInput.value);
    let addedIngredient = new Ingredient(nameInput.value, parseInt(amountInput.value));
    this.ingredientAdded.emit(addedIngredient);
  }

  ngOnInit() {
  }

}
