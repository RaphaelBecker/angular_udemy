import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test recipe', 'This is simply a test', 'https://www.acouplecooks.com/wp-content/uploads/2021/03/Cheese-Tortellini-011.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
