import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { init } from 'src/app/reducers/recipes/recipes.actions';
import { RatesService } from 'src/app/services/rates.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  constructor(private store: Store, private RatesApi: RatesService) {}
  @Input() recipe!: Recipe;
  recipeRate$!: Observable<number>;
  userId: string = '5ed6b394e10889341f2b4a8c';

  changeRate(rate: number) {
    this.RatesApi.rateRecipe(this.recipe.id, this.userId, rate).subscribe();
    this.store.dispatch(init());
  }

  ngOnInit(): void {
    this.recipeRate$ = this.RatesApi.getRateById(this.recipe.id);
  }
}
