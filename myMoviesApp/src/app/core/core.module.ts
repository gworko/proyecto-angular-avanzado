import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { MoviesModule } from '../movies/movies.module';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
    CommonModule,
    DashboardModule,
    MoviesModule
  ],
  bootstrap: [AppComponent]
})
export class CoreModule { }

