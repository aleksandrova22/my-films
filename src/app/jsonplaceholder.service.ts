import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface MovieFull {
  imdbID: string;
   Year: number;
  Released: string;
  Country: string,
  Genre: string,
  Actors: string,
  Plot: string;
  Poster: URL;
}


@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {
  constructor(private http: HttpClient) { }
 
  getPoster(movieId: string) {
    return this.http.get<MovieFull[]>('https://omdbapi.com/?apikey=f7517aad&i=' + movieId + '&plot=full');
    
  }
}
