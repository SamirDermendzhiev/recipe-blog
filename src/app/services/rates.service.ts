import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { Rate } from '../models/rate.model';
import { filter, find, first, map, mergeMap, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RatesService {
  private url = `${environment.apiUrl}/rates`;

  constructor(private http: HttpClient) {}

  getAllRates$() {
    return this.http.get<Rate[]>(this.url);
  }

  rateRecipe(recipeId: string, userId: string, rate: number) {
    let found: Rate | undefined;
    const rateData = { recipeId: recipeId, userId: userId, rate: rate };
    console.log(rateData);
    this.getAllRates$().pipe(
      mergeMap((rate) => {
        console.log(rate);
        return rate;
      }),
      find((x) => x.recipeId === recipeId && x.userId === userId),
      map((x) => {
        found = x;
      })
    );
    console.log(found, 'found');

    if (found) return this.http.put(`${this.url}/${found.id}`, rateData);
    else return this.http.post(this.url, rateData);
  }

  getRateById(id: string): Observable<number> {
    return this.getAllRates$().pipe(
      mergeMap((rate) => rate),
      filter((rate) => rate.recipeId === id),
      toArray(),
      map((x) => {
        return x.reduce((partialSum, a) => partialSum + a.rate, 0) / x.length;
      })
    );
  }

  // postRecipe$(recipe: Recipe): Observable<Recipe> {
  //   return this.http.post<Recipe>(this.url, recipe);
  // }

  // putRecipe$(recipe: Recipe): Observable<Recipe> {
  //   const url = `${this.url}/${recipe.id}`;

  //   return this.http.put<Recipe>(url, recipe);
  // }

  // deleteRecipe$(id: number): Observable<void> {
  //   const url = `${this.url}/${id}`;

  //   return this.http.delete<void>(url);
  // }
}

// export async function deleteRateById(recipeId) {
//   const allRates = (await getAllRates()).data;
//   const recipeRates = allRates.filter((rate) => rate.recipeId === recipeId);
//   recipeRates.forEach((rate) => axios.delete(`${apiUrl}/${rate.id}`));
// }

// export async function getUserRateFor(recipeId) {
//   const loggedUser = getLoggedUser();
//   const allRates = (await getAllRates()).data;

//   const userRate = allRates.find(
//     (rate) => rate.recipeId === recipeId && rate.userId === loggedUser.id
//   );
//   if (userRate) return userRate.rate;

//   return 0;
// }
