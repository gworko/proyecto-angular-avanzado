import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { MoviesModule } from '../movies/movies.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    DashboardModule,
    MoviesModule
  ],
  bootstrap: [AppComponent]
})
export class CoreModule { }

