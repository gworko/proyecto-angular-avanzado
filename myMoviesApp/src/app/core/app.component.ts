import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-menu></app-menu>
  <app-dashboard-page></app-dashboard-page>
  <app-movies-page></app-movies-page>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myMoviesApp';
}

