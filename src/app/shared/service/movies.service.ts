import { Injectable } from '@angular/core';
import { movies } from '../movies';
import { Observable, Observer } from 'rxjs';
import { Movie } from '../model/movie.model';

@Injectable()
export class MoviesService {

    private movies: Movie[] =  movies.map( (movie) => {
        return new Movie(movie.id, movie.name, movie.director, movie.imageUrl, movie.duration, movie.releaseDate, movie.genres);
    });

  constructor() { }

  public getMovies(){



      return new Observable((o: Observer<any>) => {
          setTimeout(() => {
              o.next(this.movies);

          }, 1000);
      });
  }

  public search(term){
      console.log('filtermovies', term);
      return new Observable( (o: Observer<any>) => {
          setTimeout(() => {
              let filtermovies = this.movies.filter(movie => movie.name.toLowerCase().indexOf(term.toLowerCase()) > -1);

              o.next(filtermovies);
              return o.complete();
          }, 1000);
      })
  }

}
