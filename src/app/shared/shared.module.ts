import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from './service/movies.service';
import { MoviesRowComponent } from './movies-row/movies-row.component';

@NgModule({
  imports: [
    CommonModule,

  ],
    providers: [
        MoviesService
    ],
    declarations: [MoviesRowComponent],
    exports: [
        MoviesRowComponent
    ]
})
export class SharedModule { }
