import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { RatesService } from 'src/app/services/rates.service';
import { init, loadRatesSuccess } from './rates.actions';

@Injectable()
export class RatesEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(init),
      mergeMap(() =>
        this.ratesApi
          .getAllRates$()
          .pipe(map((response) => loadRatesSuccess({ rates: response })))
      )
    )
  );

  constructor(private actions$: Actions, private ratesApi: RatesService) {}
}
