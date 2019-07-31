import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  recipes: Recipe[] = [
    new Recipe("Test", "Description", "https://natashaskitchen.com/wp-content/uploads/2017/03/Fetuchini-Alfredo-Pasta-3.jpg"),
    new Recipe("Test", "Description", "https://natashaskitchen.com/wp-content/uploads/2017/03/Fetuchini-Alfredo-Pasta-3.jpg"),
        
  ] 

  ngOnInit() {
  }

}
