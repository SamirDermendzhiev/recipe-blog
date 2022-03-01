import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { init, loadRecipesSuccess } from './recipes.actions';
import { map, mergeMap } from 'rxjs/operators';
import { RecipesService } from 'src/app/services/recipe.service';

@Injectable()
export class RecipesEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(init),
      mergeMap(() =>
        this.recipesApi
          .getRecipes$()
          .pipe(map((response) => loadRecipesSuccess({ recipes: response })))
      )
    )
  );

  constructor(private actions$: Actions, private recipesApi: RecipesService) {}
}
