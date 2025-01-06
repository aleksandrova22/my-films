import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MovieFull, JsonplaceholderService } from '../jsonplaceholder.service';



@Component({
  selector: 'app-modal',
  imports: [AsyncPipe],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  movieIdFull: MovieFull[] = [];
  done1: boolean = false;
  constructor(private jsph: JsonplaceholderService) { }

  ngGetPoster(movieId: string) {
    this.jsph.getPoster(movieId).subscribe(  data => this.movieIdFull = data );
        this.done1 = true;
    console.log(movieId);
             console.log('movieIdFull', this.movieIdFull);
    console.log('done1', this.done1);
  }

  public ngClosePoster(){
    this.done1 = false;
    //this.out.emit(this.done1) ;
    console.log('done11', this.done1);
  }


}
