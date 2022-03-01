import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Rate } from 'src/app/models/rate.model';
import { Recipe } from 'src/app/models/recipe.model';
import { init, loadRatesFailure, loadRatesSuccess } from './rates.actions';

export const RATES_FEATURE_KEY = 'recipes';

export interface RateState extends EntityState<Rate> {
  loaded: boolean; // has the Tables list been loaded
  error?: string | null; // last known error (if any)
}

export const ratesAdapter: EntityAdapter<Rate> = createEntityAdapter<Rate>();

export const initialState: RateState = ratesAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialState,
  on(init, (state) => ({ ...state, loaded: false, error: null })),
  on(loadRatesSuccess, (state, { rates }) =>
    ratesAdapter.setAll(rates, { ...state, loaded: true })
  ),
  on(loadRatesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function recipeReducer(state: RateState | undefined, action: Action) {
  return reducer(state, action);
}
