import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesPageComponent } from './containers/movies-page/movies-page.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';



@NgModule({
  declarations: [MoviesPageComponent, MoviesListComponent],
  exports: [MoviesPageComponent, MoviesListComponent],
  imports: [
    CommonModule
  ]
})
export class MoviesModule { }
