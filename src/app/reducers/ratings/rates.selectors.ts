import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { ratesAdapter, RATES_FEATURE_KEY, RateState } from './rates.reducer';

// Lookup the 'Tables' feature state managed by NgRx
export const getRatesState =
  createFeatureSelector<RateState>(RATES_FEATURE_KEY);

const { selectAll } = ratesAdapter.getSelectors();

export const getAllRates = createSelector(getRatesState, (state: RateState) =>
  selectAll(state)
);
