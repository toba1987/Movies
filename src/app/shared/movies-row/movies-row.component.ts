import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../model/movie.model';

@Component({
  selector: '[moviesRow]',
  templateUrl: './movies-row.component.html'
})
export class MoviesRowComponent implements OnInit {

private movie: Movie;

    @Input()
    set moviesRow(movie: Movie){
        this.movie = movie;

    }


  constructor() { }

  ngOnInit() {
  }

}
