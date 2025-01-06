import { AsyncPipe } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieFull, JsonplaceholderService } from '../jsonplaceholder.service';

export interface Movie {
  imdbID: string;
  Title: string;
  Type: string;
  Year: number;
  Poster: URL;
}


@Component({
  selector: 'app-films',
  imports: [FormsModule],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent {
  @Input() text: string = '';
  movies: Movie[] = [];
  done: boolean = false;
  movieIdActor: string = '';
  movieIdReleased: string = '';
  movieIdCountry: string = '';
  movieIdGenre: string = '';
  movieIdPlot: string = '';
  movieIdPoster: string = '';

  doneModal: boolean = false;
  constructor(private http: HttpClient, private jsph: JsonplaceholderService) { }
  @Output() out = new EventEmitter;

  ngOnInit(inputSearch: string) {
    const indexPage = 1;
    this.http.get('https://www.omdbapi.com/?apikey=f7517aad&s=' + inputSearch + '&page=' + indexPage).subscribe(
      { next: (data: any) => { this.movies = data.Search; this.done = true; }, error: error => console.log(error) });
    if (!inputSearch || inputSearch == undefined) { this.done = false }
    //console.log('done', this.done);
  }

  ngGetPoster(movieId: string) {

    this.jsph.getPoster(movieId).subscribe(
      {
        next: (data: any) => {
          this.movieIdReleased = data.Released;
          this.movieIdActor = data.Actors;
          this.movieIdCountry = data.Country;
          this.movieIdGenre = data.Genre;
          this.movieIdPlot = data.Plot;
          this.movieIdPoster = data.Poster;
          this.doneModal = true;
        }, error: error => console.log(error)
      });
    console.log('movieId', movieId);
  
  }

  public ngClosePoster() {
    this.doneModal = false;
    //this.out.emit(this.doneModal);
  }

}


@Component({
  selector: 'unused-selector',
  template: ` home  `
})
export class HomeComponent { }


