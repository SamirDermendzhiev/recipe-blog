import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private url = `${environment.apiUrl}/recipes`;

  constructor(private http: HttpClient) {}

  getRecipes$(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.url);
  }

  getRecipe$(id: number): Observable<Recipe> {
    const url = `${this.url}/${id}`;

    return this.http.get<Recipe>(url);
  }

  postRecipe$(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.url, recipe);
  }

  putRecipe$(recipe: Recipe): Observable<Recipe> {
    const url = `${this.url}/${recipe.id}`;

    return this.http.put<Recipe>(url, recipe);
  }

  deleteRecipe$(id: number): Observable<void> {
    const url = `${this.url}/${id}`;

    return this.http.delete<void>(url);
  }
}
