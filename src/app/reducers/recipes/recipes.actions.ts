import { createAction, props } from '@ngrx/store';
import { Recipe } from '../../models/recipe.model';

export const init = createAction('[Recipe Page] Init');

export const loadRecipesSuccess = createAction(
  '[Recipe/API] Load Tables Success',
  props<{ recipes: Recipe[] }>()
);

export const loadRecipesFailure = createAction(
  '[Recipe/API] Load Tables Failure',
  props<{ error: string }>()
);
