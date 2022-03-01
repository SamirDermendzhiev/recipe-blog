import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import {
  recipesAdapter,
  RECIPES_FEATURE_KEY,
  RecipeState,
} from './recipes.reducer';

// Lookup the 'Tables' feature state managed by NgRx
export const getTablesState =
  createFeatureSelector<RecipeState>(RECIPES_FEATURE_KEY);

const { selectAll } = recipesAdapter.getSelectors();

export const getAllRecipes = createSelector(
  getTablesState,
  (state: RecipeState) => selectAll(state)
);
