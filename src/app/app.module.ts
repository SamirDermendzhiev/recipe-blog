import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { RecipesListComponent } from './pages/recipes-list/recipes-list.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { StoreModule } from '@ngrx/store';
import {
  recipeReducer,
  RECIPES_FEATURE_KEY,
} from './reducers/recipes/recipes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RecipesEffects } from './reducers/recipes/recipes.effects';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { ExponentialStrengthPipe } from './utils/toFixed.pipe';

@NgModule({
  declarations: [
    ExponentialStrengthPipe,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    RecipesListComponent,
    RecipeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(RECIPES_FEATURE_KEY, recipeReducer),
    EffectsModule.forFeature([RecipesEffects]),
    StoreModule.forRoot({}, {}),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
