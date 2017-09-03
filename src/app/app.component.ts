import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tiles: any;

  constructor() {
    this.tiles = [
      {text: 'My Work', cols: 3, rows: 2, color: 'lightblue'},
      {text: 'Me', cols: 1, rows: 4, color: '#fff'},
      {text: 'Three', cols: 1, rows: 2, color: 'lightpink'},
      {text: 'Reach Out', cols: 2, rows: 2, color: '#DDBDF1'},
    ];
  }

}
