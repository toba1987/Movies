import { Component, OnInit } from '@angular/core';
import { MoviesService} from './../../../shared/service/movies.service';
import { ActivatedRoute} from '@angular/router';
import { Movie } from './../../../shared/model/movie.model';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent implements OnInit {

    private movies: Movie[];

  constructor(private moviesService: MoviesService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      this.activatedRoute.paramMap.subscribe((params) => {
          let term = params.get('term');
          this.moviesService.search(term).subscribe((movies: Movie[]) => {
              this.movies = movies;
          });
      });

  }

}
