import { Injectable } from '@angular/core';
import { movies } from '../movies';
import { Observable, Observer } from 'rxjs';
import { Movie } from '../model/movie.model';

@Injectable()
export class MoviesService {

    private movies: any = [];

  constructor() { }

  public getMovies(){

      movies.forEach( (movie) => {

          this.movies.push(new Movie(movie.id, movie.name, movie.director, movie.imageUrl, movie.duration, movie.releaseDate, movie.genres));
      })

      return new Observable((o: Observer<any>) => {
          setTimeout(() => {
              o.next(this.movies);

          }, 1000);
      });
  }
    /*removeContact(contact: Contact)
    {
        return new Observable((o: Observer<any>) => {
            setTimeout(() => {
                o.next(contact);
                return o.complete();

            }, 1000);
        });
    }*/
}
