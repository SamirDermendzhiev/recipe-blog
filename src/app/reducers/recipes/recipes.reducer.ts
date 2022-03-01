import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Recipe } from 'src/app/models/recipe.model';
import {
  init,
  loadRecipesFailure,
  loadRecipesSuccess,
} from './recipes.actions';

export const RECIPES_FEATURE_KEY = 'recipes';

export interface RecipeState extends EntityState<Recipe> {
  loaded: boolean; // has the Tables list been loaded
  error?: string | null; // last known error (if any)
}

export const recipesAdapter: EntityAdapter<Recipe> =
  createEntityAdapter<Recipe>();

export const initialState: RecipeState = recipesAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialState,
  on(init, (state) => ({ ...state, loaded: false, error: null })),
  on(loadRecipesSuccess, (state, { recipes }) =>
    recipesAdapter.setAll(recipes, { ...state, loaded: true })
  ),
  on(loadRecipesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function recipeReducer(state: RecipeState | undefined, action: Action) {
  return reducer(state, action);
}
