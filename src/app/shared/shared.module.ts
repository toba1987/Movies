import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from './service/movies.service';

@NgModule({
  imports: [
    CommonModule
  ],
    providers: [
        MoviesService
    ],
  declarations: []
})
export class SharedModule { }
