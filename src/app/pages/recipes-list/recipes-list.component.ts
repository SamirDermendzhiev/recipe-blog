import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { init } from 'src/app/reducers/recipes/recipes.actions';
import { getAllRecipes } from 'src/app/reducers/recipes/recipes.selectors';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  constructor(private store: Store) {}

  recipes$!: Observable<Recipe[]>;

  ngOnInit(): void {
    this.recipes$ = this.store.pipe(select(getAllRecipes));
    this.store.dispatch(init());
  }
}
