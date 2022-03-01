import { createAction, props } from '@ngrx/store';
import { Rate } from 'src/app/models/rate.model';
import { Recipe } from '../../models/recipe.model';

export const init = createAction('[Rates Page] Init');

export const loadRatesSuccess = createAction(
  '[Rates/API] Load Tables Success',
  props<{ rates: Rate[] }>()
);

export const loadRatesFailure = createAction(
  '[Rates/API] Load Tables Failure',
  props<{ error: string }>()
);
