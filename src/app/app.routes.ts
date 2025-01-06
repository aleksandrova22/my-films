import { Routes } from '@angular/router';
import { FilmsComponent, HomeComponent } from './films/films.component';

export const routes: Routes = [

    { path: '', component: HomeComponent},
    { path: 'films', component: FilmsComponent},
];
