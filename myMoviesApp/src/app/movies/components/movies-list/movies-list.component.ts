import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  template: `
    <p>
      movies-list works!
    </p>
  `,
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
