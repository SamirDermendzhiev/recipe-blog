import { RecipeState, RECIPES_FEATURE_KEY } from './recipes/recipes.reducer';

export interface AppState {
  readonly [RECIPES_FEATURE_KEY]: RecipeState;
}
