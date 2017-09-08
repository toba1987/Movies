import { Component, OnInit } from '@angular/core';
import { Movie } from '../../shared/model/movie.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

    private searchFilter: string = "";

  constructor(private router: Router) { }

    searchMovies(movie: string){
        this.router.navigate(['search', movie]);

    }

  ngOnInit() {
  }

}
