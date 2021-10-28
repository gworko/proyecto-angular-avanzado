import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <nav>
      <a class="active" href="" mat-raised-button color="primary">Dashboard</a>
      <a href="" mat-raised-button color="accent">Películas</a>
    </nav>
    
  `,
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
