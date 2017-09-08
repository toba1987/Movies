import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../../components/search/search.component';
import { SharedModule } from '../shared.module';
import { SearchPageComponent } from '../../components/search/search-page/search-page.component';

@NgModule({
  imports: [
    CommonModule,
      SharedModule
  ],
  declarations: [
      SearchComponent,
      SearchPageComponent

  ]
})
export class SearchModule { }
