import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MoviesComponent } from './components/movies/movies.component';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule} from './shared/shared.module';
import { SearchComponent } from './components/search/search.component';
import { SearchPageComponent } from './components/search/search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MoviesComponent,
    SearchComponent,
    SearchPageComponent,

  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      SharedModule,
      FormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
